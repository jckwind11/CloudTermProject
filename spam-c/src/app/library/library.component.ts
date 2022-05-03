import { Component, OnInit } from '@angular/core';
import { ConvertedPlaylist } from '../_models/ConvertedPlaylist';
import { ViewEncapsulation } from '@angular/core';


import { NotificationService } from '../_services/notification.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LibraryComponent implements OnInit {

  playlists: ConvertedPlaylist[] = [];

  constructor(
    private userService: UserService,
    private notifService: NotificationService
  ) { }

  ngOnInit(): void {
    this.getConvertedPlaylist();
  }

  get hasPlaylists() {
    return this.playlists.length > 0
  }


  getConvertedPlaylist() {
    this.userService.getAll().subscribe(playlists => {
      this.playlists = playlists;
    }, error => {
      console.log(error);
    })
  }

}
