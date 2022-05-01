import { Component } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { NotificationService } from './_services/notification.service';
import { AppleMusicAuthService } from './_services/apple-music-auth.service';
import { SpotifyAuthService } from './_services/spotify-auth.service';

import { Router } from '@angular/router';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spam-c';

  currentUser: User;
  acronym: string;


  constructor(private router: Router,
    private authService: AuthService,
    private notifService: NotificationService,
    private appleAuth: AppleMusicAuthService,
    private spotifyAuth: SpotifyAuthService
  ) {
    this.authService.currentUser.subscribe(x => { 
      this.currentUser = x
    });
    this.appleAuth.initalize();
    this.spotifyAuth.initalize();
  }

  get isUser() {
    return this.currentUser;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
