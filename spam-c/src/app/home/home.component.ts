import { Component, OnInit } from '@angular/core';
import { SpotifySong } from '../_models/Spotify/SpotifySong';
import { ViewEncapsulation } from '@angular/core';

import { SpotifyService } from '../_services/spotify.service';
import { AppleMusicService } from '../_services/apple-music.service';
import { NotificationService } from '../_services/notification.service';
import { SpotifyPlaylistTracksResponse } from '../_models/Spotify/SpotifyPlaylistTracksResponse';
import { AppleResponse } from '../_models/Apple/AppleResponse';
import { AppleSong } from '../_models/Apple/AppleSong';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  songs: SpotifySong[] = [];

  songsISRC: string[] = [];

  convertedSongs: AppleSong[] = [];

  playlistName: string = '';

  playlistDescription: string = '';

  spotifyLink: string = 'https://open.spotify.com/playlist/0sxZ0TSlk4fE0xe76yXebp?si=3541557887564224';

  appleLink: string = '';

  loading = false;

  constructor(
    private spotifyService: SpotifyService,
    private notifService: NotificationService,
    private appleService: AppleMusicService
  ) { }

  ngOnInit(): void { }

  get hasSongs() {
    return this.songs.length > 0
  }

  get hasConvertedSongs() {
    return this.convertedSongs.length > 0
  }

  gotInputPlaylist() {
    if (this.spotifyLink.length == 0) {
      return
    }
    // https://open.spotify.com/playlist/0sxZ0TSlk4fE0xe76yXebp?si=3541557887564224
    this.spotifyService.getTracksFor(this.spotifyLink).subscribe(
      (result: SpotifyPlaylistTracksResponse) => {
        this.playlistName = result.name;
        this.playlistDescription = result.description;
        this.songs = result.tracks.items;
        this.songsISRC = result.tracks.items.map(song => { return song.track.external_ids.isrc });
      },
      error => {
        console.log(error);
        this.notifService.showNotif(error, 'okay');
      }
    );
  }

  async convert() {
    this.loading = true;
    const response = await this.appleService.createPlaylist(this.playlistName, this.playlistDescription).toPromise();
    const playlistResponse = response["data"];
    if (playlistResponse && playlistResponse.length > 0) {
      const playlistID = playlistResponse[0]["id"];
      const chunkSize = 24;
      for (let i = 0; i < this.songsISRC.length; i += chunkSize) {
        const chunk = this.songsISRC.slice(i, i + chunkSize);
        const songsFromChunk: AppleResponse = await this.appleService.getSongsFromISRC(chunk).toPromise();
        songsFromChunk.data = songsFromChunk.data.filter((value, index, self) =>
          index === self.findIndex((song) => (
            song.attributes.isrc === value.attributes.isrc 
          ))
        )
        songsFromChunk.data.sort((a, b) => chunk.indexOf(a.attributes.isrc) - chunk.indexOf(b.attributes.isrc));
        this.convertedSongs = this.convertedSongs.concat(songsFromChunk.data);
      }
      const ids = this.convertedSongs.map(song => { return { id: song.id, type: song.type } });
      await this.appleService.addSongsToPLaylist(playlistID, ids).toPromise();
      this.loading = false;
    } else {
      this.loading = false;
    }
  }

}
