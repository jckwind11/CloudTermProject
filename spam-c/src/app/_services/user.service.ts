import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';

import { AuthService } from './auth.service';
import { ConvertedPlaylist } from '../_models/ConvertedPlaylist';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  register(user: User) {
    return this.http.post<User>(`http://localhost:3030/user/register`, user)
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.auth.currentUserSubject.next(user);
        }
        return user;
      }));
  }

  addPlaylist(newPlaylist: ConvertedPlaylist) {
    return this.http.post(`http://localhost:3030/user/addplaylist`, newPlaylist);
  }

  delete(playlistID: string) {
    return this.http.delete(`http://localhost:3030/user/${playlistID}`);
  }

  getAll() {
    return this.http.get<ConvertedPlaylist[]>(`http://localhost:3030/user/getplaylists`);
  }

  // Authorization: `Bearer ${currentUser.token}`
}
