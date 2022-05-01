import { SpotifyPlaylistOwner } from './SpotifyPlaylistOwner';
import { SpotifyImage } from './SpotifyImage';
import { SpotifyLink } from './SpotifyLink';


export class SpotifyPlaylist {
    href: string;
    name: string;
    images: SpotifyImage[];
    owner: SpotifyPlaylistOwner;
    external_urls: SpotifyLink;
}

// {
//     "collaborative": false,
//     "description": "Designed to slide you into a deep chill.  Lulling and truly relaxing tempos and timbres. No loud, fast or thumping dance music you often find in other so-called chill mixes.",
//     "external_urls": {
//       "spotify": "https://open.spotify.com/playlist/0EedULhw6qjt7m6PD0Zsjb"
//     },
//     "href": "https://api.spotify.com/v1/playlists/0EedULhw6qjt7m6PD0Zsjb",
//     "id": "0EedULhw6qjt7m6PD0Zsjb",
//     "images": [
//       {
//         "height": null,
//         "url": "https://i.scdn.co/image/ab67706c0000bebb7fdb3be5e51a52a6c66db59d",
//         "width": null
//       }
//     ],
//     "name": "Chillest Downtempo Mix",
//     "owner": {
//       "display_name": "Echoes",
//       "external_urls": {
//         "spotify": "https://open.spotify.com/user/123156102"
//       },
//       "href": "https://api.spotify.com/v1/users/123156102",
//       "id": "123156102",
//       "type": "user",
//       "uri": "spotify:user:123156102"
//     },
//     "primary_color": null,
//     "public": false,
//     "snapshot_id": "MTgyLDUyOWI2OWQ4MTQ0ZjU4Zjc2OTIxNzA0YzdlN2MwNDk1NzVjOGIwNjU=",
//     "tracks": {
//       "href": "https://api.spotify.com/v1/playlists/0EedULhw6qjt7m6PD0Zsjb/tracks",
//       "total": 87
//     },
//     "type": "playlist",
//     "uri": "spotify:playlist:0EedULhw6qjt7m6PD0Zsjb"
//   },