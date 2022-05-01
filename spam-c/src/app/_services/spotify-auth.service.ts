import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Buffer } from 'buffer';
const queryString = require('query-string');

@Injectable({
  providedIn: 'root'
})
export class SpotifyAuthService {

  private _isAuthorized = false;

  public access_token = null;

  constructor(private http: HttpClient) { }

  async initalize() {
    this.getToken().subscribe(result => {
      this._isAuthorized = true;
      this.access_token = result["access_token"];
    }, error => {
      this._isAuthorized = false;
      console.log(error)
    })
  }

  get isAuthorized(): boolean {
    return this._isAuthorized;
  }

  private getToken() {
    let body = {
      grant_type : "client_credentials",
      redirect_uri : "http://localhost:4200/"
    }
    return this.http.post(`https://accounts.spotify.com/api/token`, queryString.stringify(body), { headers: this.getApiHeaders() });
  }

  private getApiHeaders(): HttpHeaders {
    const payload = btoa(environment.spotifyInfo.client_id + ':' + environment.spotifyInfo.client_secret);
    return new HttpHeaders({
      'Authorization': "Basic " + payload,
      'Content-Type': 'application/x-www-form-urlencoded',
    });
  }
}
