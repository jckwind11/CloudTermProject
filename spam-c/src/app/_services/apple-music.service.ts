import { Injectable } from '@angular/core';
import { AppleMusicAuthService } from './apple-music-auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppleResponse } from '../_models/Apple/AppleResponse';
import { AppleRetryResponse } from '../_models/Apple/AppleRetryResponse';

@Injectable({
  providedIn: 'root'
})
export class AppleMusicService {

  constructor(
    private appleAuth: AppleMusicAuthService,
    private http: HttpClient) {
  }

  get musicKit() {
    return this.appleAuth.musicKit;
  }

  public createPlaylist(playlistName: string, playlistDescription: string) {
    const creationRequest = {
      attributes: { name: playlistName, description: playlistDescription }
    };
    return this.http.post(`https://api.music.apple.com/v1/me/library/playlists`, creationRequest, { headers: this.getApiHeaders() });
  }

  public getSongsFromISRC(ids: string[]) {
    const idsList = ids.join("%2C");
    return this.http.get<AppleResponse>(`https://api.music.apple.com/v1/catalog/us/songs?filter[isrc]=` + idsList, { headers: this.getApiHeaders() });
  }

  public addSongsToPLaylist(playlistID: string, ids: Object[]) {
    const payload = {
      data: ids
    }
    return this.http.post(`https://api.music.apple.com/v1/me/library/playlists/` + playlistID + `/tracks`, payload, { headers: this.getApiHeaders() });
  }

  public getSongFromName(name: string) {
    const adjustedName = name.replace(" ", "+");
    return this.http.get<AppleRetryResponse>(`https://api.music.apple.com/v1/catalog/us/search?types=songs&term=` + adjustedName, { headers: this.getApiHeaders() });
  }

  private getApiHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': 'Bearer ' + this.musicKit.developerToken,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Music-User-Token': this.musicKit.musicUserToken
    });
  }

}
