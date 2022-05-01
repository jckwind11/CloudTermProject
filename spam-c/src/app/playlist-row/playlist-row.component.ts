import { Component, OnInit, Input } from '@angular/core';
import { SpotifyPlaylist } from '../_models/Spotify/SpotifyPlaylist';

@Component({
  selector: 'playlist-row',
  templateUrl: './playlist-row.component.html',
  styleUrls: ['./playlist-row.component.css']
})
export class PlaylistRowComponent implements OnInit {

  @Input() playlist: SpotifyPlaylist;

  imageUrl: string = '';
  owner: string = '';
  title: string = '';

  constructor() { }

  ngOnInit(): void {
    this.imageUrl = this.playlist.images[0].url;
    this.owner = this.playlist.owner.display_name;
    this.title = this.playlist.name;
  }

}
