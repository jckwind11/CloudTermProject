export class AppleSong {
    id: string;
    type: string;
    attributes: {
        artwork: {
            url: string;
            height: number;
            width: number;
        }
        artistName: string;
        name: string;
        isrc: string;
        url: string;
        albumName: string
    }
}

// {   
//     "id": "1264835655",
//     "type": "songs",
//     "href": "/v1/catalog/us/songs/1264835655",
//     "attributes": {
//         "previews": [
//             {
//                 "url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/79/f7/ae/79f7ae64-77ad-eefd-be31-0cd732f5d1a7/mzaf_9945120727526505006.plus.aac.p.m4a"
//             }
//         ],
//         "artwork": {
//             "width": 1500,
//             "height": 1500,
//             "url": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/7a/27/66/7a2766c2-d473-e6ad-4f2c-945b2c14e32f/887158588723.png/{w}x{h}bb.jpg",
//             "bgColor": "dddddd",
//             "textColor1": "050505",
//             "textColor2": "1d1d1d",
//             "textColor3": "303030",
//             "textColor4": "434343"
//         },
//         "artistName": "Will Cady",
//         "url": "https://music.apple.com/us/album/what-fills-the-gap-feat-alan-watts/1264835136?i=1264835655",
//         "discNumber": 1,
//         "genreNames": [
//             "Alternative",
//             "Music"
//         ],
//         "durationInMillis": 270500,
//         "releaseDate": "2013-07-01",
//         "name": "What Fills the Gap (feat. Alan Watts)",
//         "isrc": "USA2P1368496",
//         "hasLyrics": false,
//         "albumName": "The Awake - EP",
//         "playParams": {
//             "id": "1264835655",
//             "kind": "song"
//         },
//         "trackNumber": 2,
//         "contentRating": "explicit"
//     },
//     "relationships": {
//         "albums": {
//             "href": "/v1/catalog/us/songs/1264835655/albums",
//             "data": [
//                 {
//                     "id": "1264835136",
//                     "type": "albums",
//                     "href": "/v1/catalog/us/albums/1264835136"
//                 }
//             ]
//         },
//         "artists": {
//             "href": "/v1/catalog/us/songs/1264835655/artists",
//             "data": [
//                 {
//                     "id": "557081241",
//                     "type": "artists",
//                     "href": "/v1/catalog/us/artists/557081241"
//                 }
//             ]
//         }
//     }
// }