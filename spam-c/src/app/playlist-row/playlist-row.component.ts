import { Component, OnInit, Input } from '@angular/core';
import { ConvertedPlaylist } from '../_models/ConvertedPlaylist';

@Component({
  selector: 'playlist-row',
  templateUrl: './playlist-row.component.html',
  styleUrls: ['./playlist-row.component.css']
})
export class PlaylistRowComponent implements OnInit {

  @Input() playlist: ConvertedPlaylist;

  imageUrl: string = '';
  owner: string = '';
  title: string = '';
  url: string = "";

  constructor() { }

  ngOnInit(): void {
    this.imageUrl = this.playlist.playlist_image_url;
    console.log(this.imageUrl);
    this.title = this.playlist.name
    this.owner = this.playlist.description;
    this.url = "https://music.apple.com/library/playlist/" + this.playlist.playlist_id;
  }

}
