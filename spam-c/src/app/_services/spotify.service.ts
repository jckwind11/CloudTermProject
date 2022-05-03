import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { SpotifyPlaylist } from '../_models/Spotify/SpotifyPlaylist';
import { SpotifyPlaylistTracksResponse } from '../_models/Spotify/SpotifyPlaylistTracksResponse';
import { SpotifyAuthService } from './spotify-auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient, private spotifyAuth: SpotifyAuthService) { }

  getTracksFor(playlist: string): Observable<SpotifyPlaylistTracksResponse> {
    const url = this.playlistTracksURL(playlist);
    if (url == null) {
      return throwError({ status: 11, message: "Please Provide a Valid URL"});
    }
    return this.http.get<SpotifyPlaylistTracksResponse>(url, { headers: this.getApiHeaders() });
  }

  getPlaylists() {
    return new Observable<SpotifyPlaylist[]>(subscriber => {
    });
  }

  public getPlaylistImageURL(playlistLink: string) {
    const id = this.playlistID(playlistLink);
    if (id == null) {
      return null;
    }
    const url = `https://api.spotify.com/v1/playlists/${id}/images`;
    return this.http.get(url, { headers: this.getApiHeaders() });
  }
  // items(added_by.id,track(name,artists(name),href,album(name,images,href)))

  private playlistTracksURL(playlistLink: string): string {
    const id = this.playlistID(playlistLink);
    if (id == null) {
      return null;
    }
    return `https://api.spotify.com/v1/playlists/` + id + `?market=ES&fields=name%2Cdescription%2Ctracks(items(added_by.id%2Ctrack(external_ids(isrc)%2Cname%2Cartists(name)%2Chref%2Calbum(name%2Cimages%2Chref))))`;
  }

  public playlistID(playlistLink: string) {
    var url: URL;
    try {
      url = new URL(playlistLink);
    } catch (_) {
      return null;
    }
    const pathName = url.pathname.split("/");
    if (pathName.length == 3) {
      return pathName[2];
    }
  }

  private getApiHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': 'Bearer ' + this.spotifyAuth.access_token,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    });
  }
}
