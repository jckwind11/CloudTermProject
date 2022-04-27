import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../_models/user';
import { HttpClient } from '@angular/common/http';
import { Provider } from '../_models/Provider';


@Injectable({ providedIn: 'root' })
export class AuthService {

  public currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;


  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));

    // tslint:disable-next-line:max-line-length
    this.currentUser = this.currentUserSubject.asObservable();

  }


  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`http://localhost:3030/user/login`, { username, password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return user;
      }));

  }


  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    // notify all subscribers that user has logged out.
    this.currentUserSubject.next(null);
  }


}