import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';

import { AuthService } from './auth.service';

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

}
