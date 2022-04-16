import { Component, OnInit } from '@angular/core';
import { SpotifyPlaylist } from '../_models/SpotifyPlaylist';
import { ViewEncapsulation } from '@angular/core';


import { SpotifyService } from '../_services/spotify.service';
import { NotificationService } from '../_services/notification.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LibraryComponent implements OnInit {

  playlists: SpotifyPlaylist[] = [];

  convertedPlaylists: SpotifyPlaylist[] = [];

  constructor(
    private spotifyService: SpotifyService,
    private notifService: NotificationService
  ) { }

  ngOnInit(): void {
    this.getMyPlaylist();
    this.getConvertedPlaylist();
  }

  get hasPlaylists() {
    return this.playlists.length > 0
  }

  get hasConvertedPlaylists() {
    return this.convertedPlaylists.length > 0
  }

  getMyPlaylist() {
    this.spotifyService.getPlaylists().subscribe(
      playlists => {
        this.playlists = playlists;
      },
      error => { this.notifService.showNotif(error, 'error'); });
  }

  getConvertedPlaylist() {
    this.spotifyService.getPlaylists().subscribe(
      playlists => {
        this.convertedPlaylists = playlists;
      },
      error => { this.notifService.showNotif(error, 'error'); });
  }

}
