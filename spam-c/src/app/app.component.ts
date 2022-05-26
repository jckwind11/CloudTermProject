import { Component } from '@angular/core';
import { NotificationService } from './_services/notification.service';
import { AppleMusicAuthService } from './_services/apple-music-auth.service';
import { SpotifyAuthService } from './_services/spotify-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spam-c';

  constructor(private router: Router,
    private appleAuth: AppleMusicAuthService,
    private spotifyAuth: SpotifyAuthService
  ) {
    this.appleAuth.initalize();
    this.spotifyAuth.initalize();
  }

}
