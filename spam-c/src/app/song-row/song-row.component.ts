import { Component, OnInit, Input } from '@angular/core';
import { AppleSong } from '../_models/Apple/AppleSong';
import { SpotifySong } from '../_models/Spotify/SpotifySong';


@Component({
  selector: 'song-row',
  templateUrl: './song-row.component.html',
  styleUrls: ['./song-row.component.css']
})
export class SongRowComponent implements OnInit {

  @Input() song: SpotifySong;

  @Input() appleSong: AppleSong;

  imageUrl: string = '';
  artists: string = '';
  title: string = '';

  constructor() { }

  ngOnInit(): void {
    if (this.song) {
      this.imageUrl = this.song.track.album.images[2].url;
      this.artists = this.song.track.artists.map(artist => {
        return artist.name;
      }).join(', ');
      this.title = this.song.track.name;
    } else if (this.appleSong) {
      this.imageUrl = this.appleSong.attributes.artwork.url
      .replace('{w}', "100")
      .replace('{h}', "100");
      this.artists = this.appleSong.attributes.artistName;
      this.title = this.appleSong.attributes.name;
    }
  }

}
