import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { AuthStatus } from '../_models/AuthStatus';

declare var MusicKit: any;

@Injectable({
  providedIn: 'root'
})
export class AppleMusicAuthService {

  private _isAuthorized = false;

  public autoRetry = true;

  public musicKit: any;

  constructor() { }

  async initalize() {
    await MusicKit.configure(environment.appleMusicInfo);
    this.musicKit = MusicKit.getInstance();
    this._isAuthorized = this.musicKit.isAuthorized;
  }

  get authStatus(): AuthStatus {
    return this.isAuthorized ? AuthStatus.authorized : AuthStatus.unauthorize;
  }

  get isAuthorized(): boolean {
    return this._isAuthorized;
  }

  public async authorize() {
     await this.musicKit.authorize();
     this._isAuthorized = true;
  }

  public async unauthorize() {
    await this.musicKit.unauthorize();
    this._isAuthorized = false;
 }

  
}
