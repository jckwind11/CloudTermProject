import { Component, OnInit } from '@angular/core';
import { SpotifySong } from '../_models/SpotifySong';
import { ViewEncapsulation } from '@angular/core';

import { SpotifyService } from '../_services/spotify.service';
import { NotificationService } from '../_services/notification.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  songs: SpotifySong[] = [];

  convertedSongs: SpotifySong[] = [];

  spotifyLink: string = '';

  appleLink: string = '';

  loading = false;

  constructor(
    private spotifyService: SpotifyService,
    private notifService: NotificationService
  ) { }

  ngOnInit(): void {

  }

  get hasSongs() {
    return this.songs.length > 0
  }

  get hasConvertedSongs() {
    return this.convertedSongs.length > 0
  }

  gotInputPlaylist() {
    this.spotifyService.getTracksFor(this.spotifyLink).subscribe(
      songs => {
        this.songs = songs;
      },
      error => { this.notifService.showNotif(error, 'error'); });
  }

  convert() {
    console.log('here');
    this.loading = true;
    this.spotifyService.getTracksFor(this.spotifyLink).subscribe(
      songs => {
        this.loading = false;
        this.appleLink = "https://music.apple.com/us/playlist/unwind/pl.c6b0ecb695eb4fcea3476050fdb4e1bb";
        this.convertedSongs = songs;
      },
      error => { this.notifService.showNotif(error, 'error'); });
  }

}
