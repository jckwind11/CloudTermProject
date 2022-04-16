import { Component, OnInit, Input } from '@angular/core';
import { SpotifySong } from '../_models/SpotifySong';


@Component({
  selector: 'song-row',
  templateUrl: './song-row.component.html',
  styleUrls: ['./song-row.component.css']
})
export class SongRowComponent implements OnInit {

  @Input() song: SpotifySong;

  imageUrl: string = '';
  artists: string = '';
  title: string= '';

  constructor() { }

  ngOnInit(): void {
    this.imageUrl = this.song.track.album.images[2].url;
    this.artists = this.song.track.artists.map(artist => {
      return artist.name;
    }).join(', ');
    this.title = this.song.track.name;
  }

}
