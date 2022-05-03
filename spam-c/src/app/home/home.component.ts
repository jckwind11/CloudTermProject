import { Component, OnInit, ɵConsole } from '@angular/core';
import { SpotifySong } from '../_models/Spotify/SpotifySong';
import { ViewEncapsulation } from '@angular/core';

import { SpotifyService } from '../_services/spotify.service';
import { AppleMusicService } from '../_services/apple-music.service';
import { NotificationService } from '../_services/notification.service';
import { SpotifyPlaylistTracksResponse } from '../_models/Spotify/SpotifyPlaylistTracksResponse';
import { AppleResponse } from '../_models/Apple/AppleResponse';
import { AppleSong } from '../_models/Apple/AppleSong';
import { Provider } from '../_models/Provider';
import { SpotifyToAMToken } from '../_models/Spotify/SpotifyToAMToken';
import { UserService } from '../_services/user.service';
import { ConvertedPlaylist } from '../_models/ConvertedPlaylist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  songs: SpotifySong[] = [];

  convertedSongs: AppleSong[] = [];

  playlistName: string = '';

  playlistDescription: string = '';

  playlistImageURL: string = '';

  spotifyLink: string = '';

  appleLink: string = '';

  playlistID = '';

  loading = false;

  failedIDs: SpotifyToAMToken[] = [];

  canRetry = true;

  constructor(
    private spotifyService: SpotifyService,
    private notifService: NotificationService,
    private appleService: AppleMusicService,
    private userService: UserService,
  ) { }

  ngOnInit(): void { }

  get hasSongs() {
    return this.songs.length > 0
  }

  get hasConvertedSongs() {
    return this.convertedSongs.length > 0
  }

  gotInputPlaylist() {
    if (this.spotifyLink.length == 0 || this.spotifyService.playlistID(this.spotifyLink) == null) {
      this.reset();
      return
    }
    this.reset();
    this.loading = true;
    // https://open.spotify.com/playlist/400p5ZsfoafmOw4bC931Fl?si=6a422e1ba9d04a93
    this.spotifyService.getTracksFor(this.spotifyLink).subscribe(
      (result: SpotifyPlaylistTracksResponse) => {
        this.playlistName = result.name;
        this.playlistDescription = result.description;
        this.songs = result.tracks.items.filter(track => { return track.track != null });
        this.loading = false;
      },
      error => {
        this.loading = false;
        this.notifService.handleError(error, Provider.spotify, 'okay');
      });
    this.spotifyService.getPlaylistImageURL(this.spotifyLink)
      .subscribe(image => {
          console.log(image);
          this.playlistImageURL = image[0]["url"];
        }, error => {
          console.log(error);
          this.playlistImageURL = "none";
        });
  }

  async convert() {
    if (!this.hasSongs) {
      this.loading = true;
      try {
        const result: SpotifyPlaylistTracksResponse = await this.spotifyService.getTracksFor(this.spotifyLink).toPromise();
        this.playlistName = result.name;
        this.playlistDescription = result.description;
        this.songs = result.tracks.items.filter(track => { return track.track != null });
      } catch (error) {
        this.loading = false;
        this.notifService.handleError(error, Provider.spotify, 'okay');
        return;
      }
    }
    this.loading = true;
    this.appleService.createPlaylist(this.playlistName, this.playlistDescription).toPromise()
      .then(response => {
        this.handleISRCs(response);
      })
      .catch(error => {
        console.log(error);
        this.loading = false;
        this.notifService.handleError(error, Provider.appleMusic, "okay");
      })
  }

  async handleISRCs(response: any) {
    const playlistResponse = response["data"];
    if (playlistResponse && playlistResponse.length > 0) {
      this.playlistID = playlistResponse[0]["id"];
      const chunkSize = 24;
      const songsISRC: SpotifyToAMToken[] = this.songs.map(song => {
        return { isrc: song.track.external_ids.isrc, artists: song.track.artists };
      });
      for (let i = 0; i < songsISRC.length; i += chunkSize) {
        const chunk = songsISRC.slice(i, i + chunkSize);
        try {
          const songsFromChunk: AppleResponse = await this.appleService.getSongsFromISRC(chunk.map(item => { return item.isrc })).toPromise();
          const processedData = this.processRawData(songsFromChunk.data, chunk);
          this.convertedSongs = this.convertedSongs.concat(processedData.result);
          this.failedIDs = this.failedIDs.concat(processedData.lostTokens);
        } catch (error) {
          this.failedIDs.concat(chunk);
          console.log(error)
        }
      }
      const ids = this.convertedSongs.map(song => { return { id: song.id, type: song.type } });
      if (ids.length == 0) {
        this.loading = false;
        this.notifService.showNotif("Nothing was able to be converted", "okay");
        return;
      }
      this.appleService.addSongsToPLaylist(this.playlistID, ids).toPromise()
        .then(() => {
          this.appleLink = "https://music.apple.com/library/playlist/" + this.playlistID;
          this.loading = false;
          const mongoPlaylist: ConvertedPlaylist = {
            name: this.playlistName,
            description: (this.playlistDescription) ? this.playlistDescription : " ",
            playlist_id: this.playlistID,
            playlist_image_url: this.playlistImageURL
          }
          this.userService.addPlaylist(mongoPlaylist).subscribe(() => {
            console.log("added");
          }, error => {
            console.log(error);
          })
        })
        .catch(error => {
          this.loading = false;
          this.notifService.handleError(error, Provider.appleMusic, "okay");
        })
    } else {
      this.loading = false;
    }
  }

  processRawData(data: AppleSong[], tokens: SpotifyToAMToken[]): { result: AppleSong[], lostTokens: SpotifyToAMToken[] } {
    const chunk = tokens.map(item => { return item.isrc })
    var result: AppleSong[] = [];
    var lostIDs: SpotifyToAMToken[] = []
    for (const token of tokens) {
      const artists = token.artists.map(artist => { return artist.name });
      const song = data.find(item => (item.attributes.isrc == token.isrc && artists.includes(item.attributes.artistName)));
      if (song) {
        result.push(song);
      } else {
        lostIDs.push(token);
      }
    }
    result.sort((a, b) => chunk.indexOf(a.attributes.isrc) - chunk.indexOf(b.attributes.isrc));
    return { result: result, lostTokens: lostIDs };
  }

  async retry() {
    this.loading = true;
    this.canRetry = false;
    const chunkSize = 24;
    const retryTheseIDs = this.failedIDs;
    this.failedIDs = [];
    for (let i = 0; i < retryTheseIDs.length; i += chunkSize) {
      const chunk = retryTheseIDs.slice(i, i + chunkSize);
      try {
        const songsFromChunk: AppleResponse = await this.appleService.getSongsFromISRC(chunk.map(item => { return item.isrc })).toPromise();
        const processedData = this.processRawData(songsFromChunk.data, chunk);
        this.convertedSongs = this.convertedSongs.concat(processedData.result);
        this.failedIDs = this.failedIDs.concat(processedData.lostTokens);
      } catch (error) {
        this.failedIDs.concat(chunk);
        console.log(error)
      }
    }
    const ids = this.convertedSongs.map(song => { return { id: song.id, type: song.type } });
    if (ids.length == 0) {
      this.loading = false;
      this.notifService.showNotif("Unable to convert the remaining songs", "okay");
      return;
    }
    this.appleService.addSongsToPLaylist(this.playlistID, ids).toPromise()
      .then(() => {
        this.appleLink = "https://music.apple.com/library/playlist/" + this.playlistID;
        this.loading = false;
      })
      .catch(error => {
        this.loading = false;
        this.notifService.handleError(error, Provider.appleMusic, "okay");
      })
  }

  reset() {
    this.appleLink = '';
    this.playlistID = '';
    this.playlistName = ''
    this.playlistDescription = '';
    this.canRetry = true;
    this.loading = false;
    this.songs = [];
    this.convertedSongs = [];
  }

}
