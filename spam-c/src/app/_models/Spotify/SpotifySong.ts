import { SpotifyUser } from './SpotifyUser';
import { SpotifyTrack } from './SpotifyTrack';

export class SpotifySong {
    added_by: SpotifyUser;
    track: SpotifyTrack;
}

// {
//     "added_by": {
//       "id": "jckwind11"
//     },
//     "track": {
//       "album": {
//         "href": "https://api.spotify.com/v1/albums/6dVIqQ8qmQ5GBnJ9shOYGE",
//         "images": [
//           {
//             "height": 640,
//             "url": "https://i.scdn.co/image/ab67616d0000b273c8b444df094279e70d0ed856",
//             "width": 640
//           },
//           {
//             "height": 300,
//             "url": "https://i.scdn.co/image/ab67616d00001e02c8b444df094279e70d0ed856",
//             "width": 300
//           },
//           {
//             "height": 64,
//             "url": "https://i.scdn.co/image/ab67616d00004851c8b444df094279e70d0ed856",
//             "width": 64
//           }
//         ],
//         "name": "OK Computer"
//       },
//       "artists": [
//         {
//           "name": "Radiohead"
//         }
//       ],
//       "href": "https://api.spotify.com/v1/tracks/10nyNJ6zNy2YVYLrcwLccB",
//       "name": "No Surprises"
//     }
//   }