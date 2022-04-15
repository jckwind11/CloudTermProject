import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifySong } from '../_models/SpotifySong';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor() { }

  getTracksFor(playlist: string) {
    return new Observable<SpotifySong[]>(subscriber => {
      if (this.hardCodedTracks.length > 0) {
        setTimeout(() => { subscriber.next(this.hardCodedTracks); }, 1000);
      } else {
        setTimeout(() => { subscriber.error('No songs in the DB'); }, 1000);
      }

    });
  }

  hardCodedTracks: SpotifySong[]  = [
    {
      "added_by": {
        "id": "jckwind11"
      },
      "track": {
        "album": {
          "href": "https://api.spotify.com/v1/albums/20r762YmB5HeofjMCiPMLv",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273d9194aa18fa4c9362b47464f",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02d9194aa18fa4c9362b47464f",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851d9194aa18fa4c9362b47464f",
              "width": 64
            }
          ],
          "name": "My Beautiful Dark Twisted Fantasy"
        },
        "artists": [
          {
            "name": "Kanye West"
          },
          {
            "name": "Rick Ross"
          }
        ],
        "href": "https://api.spotify.com/v1/tracks/1UGD3lW3tDmgZfAVDh6w7r",
        "name": "Devil In A New Dress"
      }
    },
    {
      "added_by": {
        "id": "jckwind11"
      },
      "track": {
        "album": {
          "href": "https://api.spotify.com/v1/albums/4LH4d3cOWNNsVw41Gqt2kv",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273ea7caaff71dea1051d49b2fe",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02ea7caaff71dea1051d49b2fe",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851ea7caaff71dea1051d49b2fe",
              "width": 64
            }
          ],
          "name": "The Dark Side of the Moon"
        },
        "artists": [
          {
            "name": "Pink Floyd"
          }
        ],
        "href": "https://api.spotify.com/v1/tracks/2ctvdKmETyOzPb2GiJJT53",
        "name": "Breathe (In the Air)"
      }
    },
    {
      "added_by": {
        "id": "jckwind11"
      },
      "track": {
        "album": {
          "href": "https://api.spotify.com/v1/albums/6WrxgVbi9Q96gV8tZMq3FH",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2733cfca71bb96dacbb1c0fb2bf",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e023cfca71bb96dacbb1c0fb2bf",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048513cfca71bb96dacbb1c0fb2bf",
              "width": 64
            }
          ],
          "name": "French Exit"
        },
        "artists": [
          {
            "name": "TV Girl"
          }
        ],
        "href": "https://api.spotify.com/v1/tracks/1H7zdcRD0gLGQY0w5ejGgX",
        "name": "Lovers Rock"
      }
    },
    {
      "added_by": {
        "id": "jckwind11"
      },
      "track": {
        "album": {
          "href": "https://api.spotify.com/v1/albums/5wtE5aLX5r7jOosmPhJhhk",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273175c577a61aa13d4fb4b6534",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02175c577a61aa13d4fb4b6534",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851175c577a61aa13d4fb4b6534",
              "width": 64
            }
          ],
          "name": "Swimming"
        },
        "artists": [
          {
            "name": "Mac Miller"
          }
        ],
        "href": "https://api.spotify.com/v1/tracks/3YnwIp2b99p3e5dsFTXIIx",
        "name": "Dunno"
      }
    },
    {
      "added_by": {
        "id": "jckwind11"
      },
      "track": {
        "album": {
          "href": "https://api.spotify.com/v1/albums/79dL7FLiJFOO0EoehUHQBv",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2739e1cfc756886ac782e363d79",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e029e1cfc756886ac782e363d79",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048519e1cfc756886ac782e363d79",
              "width": 64
            }
          ],
          "name": "Currents"
        },
        "artists": [
          {
            "name": "Tame Impala"
          }
        ],
        "href": "https://api.spotify.com/v1/tracks/2X485T9Z5Ly0xyaghN73ed",
        "name": "Let It Happen"
      }
    },
    {
      "added_by": {
        "id": "jckwind11"
      },
      "track": {
        "album": {
          "href": "https://api.spotify.com/v1/albums/4PWBTB6NYSKQwfo79I3prg",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2737433176f037e0ba14190c34f",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e027433176f037e0ba14190c34f",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048517433176f037e0ba14190c34f",
              "width": 64
            }
          ],
          "name": "Rodeo (Expanded Edition)"
        },
        "artists": [
          {
            "name": "Travis Scott"
          },
          {
            "name": "Kacy Hill"
          }
        ],
        "href": "https://api.spotify.com/v1/tracks/51EC3I1nQXpec4gDk0mQyP",
        "name": "90210 (feat. Kacy Hill)"
      }
    },
    {
      "added_by": {
        "id": "jckwind11"
      },
      "track": {
        "album": {
          "href": "https://api.spotify.com/v1/albums/6pwuKxMUkNg673KETsXPUV",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273013c00ee367dd85396f79c82",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02013c00ee367dd85396f79c82",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851013c00ee367dd85396f79c82",
              "width": 64
            }
          ],
          "name": "KIDS SEE GHOSTS"
        },
        "artists": [
          {
            "name": "KIDS SEE GHOSTS"
          }
        ],
        "href": "https://api.spotify.com/v1/tracks/4kUZvXB3LC3an3HX6h0s17",
        "name": "Cudi Montage"
      }
    },
    {
      "added_by": {
        "id": "jckwind11"
      },
      "track": {
        "album": {
          "href": "https://api.spotify.com/v1/albums/5zi7WsKlIiUXv09tbGLKsE",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2737005885df706891a3c182a57",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e027005885df706891a3c182a57",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048517005885df706891a3c182a57",
              "width": 64
            }
          ],
          "name": "IGOR"
        },
        "artists": [
          {
            "name": "Tyler, The Creator"
          }
        ],
        "href": "https://api.spotify.com/v1/tracks/51RN0kzWd7xeR4th5HsEtW",
        "name": "IGOR'S THEME"
      }
    },
    {
      "added_by": {
        "id": "jckwind11"
      },
      "track": {
        "album": {
          "href": "https://api.spotify.com/v1/albums/2dIGnmEIy1WZIcZCFSj6i8",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273661d019f34569f79eae9e985",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02661d019f34569f79eae9e985",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851661d019f34569f79eae9e985",
              "width": 64
            }
          ],
          "name": "Plastic Beach"
        },
        "artists": [
          {
            "name": "Gorillaz"
          }
        ],
        "href": "https://api.spotify.com/v1/tracks/0q6LuUqGLUiCPP1cbdwFs3",
        "name": "On Melancholy Hill"
      }
    },
    {
      "added_by": {
        "id": "jckwind11"
      },
      "track": {
        "album": {
          "href": "https://api.spotify.com/v1/albums/5wtE5aLX5r7jOosmPhJhhk",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273175c577a61aa13d4fb4b6534",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02175c577a61aa13d4fb4b6534",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851175c577a61aa13d4fb4b6534",
              "width": 64
            }
          ],
          "name": "Swimming"
        },
        "artists": [
          {
            "name": "Mac Miller"
          }
        ],
        "href": "https://api.spotify.com/v1/tracks/16umSNZfofRpDqTvf8DIAo",
        "name": "Wings"
      }
    },
    {
      "added_by": {
        "id": "jckwind11"
      },
      "track": {
        "album": {
          "href": "https://api.spotify.com/v1/albums/7D2NdGvBHIavgLhmcwhluK",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2731dacfbc31cc873d132958af9",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e021dacfbc31cc873d132958af9",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048511dacfbc31cc873d132958af9",
              "width": 64
            }
          ],
          "name": "Yeezus"
        },
        "artists": [
          {
            "name": "Kanye West"
          }
        ],
        "href": "https://api.spotify.com/v1/tracks/5nIu0VwPOsjkF61zfevLKh",
        "name": "Hold My Liquor"
      }
    },
    {
      "added_by": {
        "id": "jckwind11"
      },
      "track": {
        "album": {
          "href": "https://api.spotify.com/v1/albums/3C2MFZ2iHotUQOSBzdSvM7",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273370c12f82872c9cfaee80193",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02370c12f82872c9cfaee80193",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851370c12f82872c9cfaee80193",
              "width": 64
            }
          ],
          "name": "Lonerism"
        },
        "artists": [
          {
            "name": "Tame Impala"
          }
        ],
        "href": "https://api.spotify.com/v1/tracks/6qZjm61s6u8Ead9sWxCDro",
        "name": "Elephant"
      }
    },
    {
      "added_by": {
        "id": "jckwind11"
      },
      "track": {
        "album": {
          "href": "https://api.spotify.com/v1/albums/6k3vC8nep1BfqAIJ81L6OL",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27369592e88bb29d610a35118f8",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0269592e88bb29d610a35118f8",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485169592e88bb29d610a35118f8",
              "width": 64
            }
          ],
          "name": "An Awesome Wave"
        },
        "artists": [
          {
            "name": "alt-J"
          }
        ],
        "href": "https://api.spotify.com/v1/tracks/3Hbd6gPZ0QErPWXVkC6GRt",
        "name": "Intro"
      }
    },
    {
      "added_by": {
        "id": "jckwind11"
      },
      "track": {
        "album": {
          "href": "https://api.spotify.com/v1/albums/79dL7FLiJFOO0EoehUHQBv",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2739e1cfc756886ac782e363d79",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e029e1cfc756886ac782e363d79",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048519e1cfc756886ac782e363d79",
              "width": 64
            }
          ],
          "name": "Currents"
        },
        "artists": [
          {
            "name": "Tame Impala"
          }
        ],
        "href": "https://api.spotify.com/v1/tracks/5M4yti0QxgqJieUYaEXcpw",
        "name": "Eventually"
      }
    },
    {
      "added_by": {
        "id": "jckwind11"
      },
      "track": {
        "album": {
          "href": "https://api.spotify.com/v1/albums/7JN4bDXgC4mDcuhghlFBHc",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273fa40d26659b33036efcfd43f",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02fa40d26659b33036efcfd43f",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851fa40d26659b33036efcfd43f",
              "width": 64
            }
          ],
          "name": "Dead Man Walking"
        },
        "artists": [
          {
            "name": "Brent Faiyaz"
          }
        ],
        "href": "https://api.spotify.com/v1/tracks/5VlTQnZO89Ioku8ssdbqJk",
        "name": "Dead Man Walking"
      }
    },
    {
      "added_by": {
        "id": "jckwind11"
      },
      "track": {
        "album": {
          "href": "https://api.spotify.com/v1/albums/41GuZcammIkupMPKH2OJ6I",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273072e9faef2ef7b6db63834a3",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02072e9faef2ef7b6db63834a3",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851072e9faef2ef7b6db63834a3",
              "width": 64
            }
          ],
          "name": "ASTROWORLD"
        },
        "artists": [
          {
            "name": "Travis Scott"
          }
        ],
        "href": "https://api.spotify.com/v1/tracks/4SZepBIPDRwPaHIjAKwRDb",
        "name": "R.I.P. SCREW"
      }
    },
    {
      "added_by": {
        "id": "jckwind11"
      },
      "track": {
        "album": {
          "href": "https://api.spotify.com/v1/albums/35vTE3hx3AAXtM6okpJIIt",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273fc685af465876c629ad111ef",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02fc685af465876c629ad111ef",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851fc685af465876c629ad111ef",
              "width": 64
            }
          ],
          "name": "Depression Cherry"
        },
        "artists": [
          {
            "name": "Beach House"
          }
        ],
        "href": "https://api.spotify.com/v1/tracks/0hNhlwnzMLzZSlKGDCuHOo",
        "name": "Space Song"
      }
    },
    {
      "added_by": {
        "id": "jckwind11"
      },
      "track": {
        "album": {
          "href": "https://api.spotify.com/v1/albums/5CNckxfLf4TCoMOoxgAU8l",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273733e6d7818eef87d20df86b5",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02733e6d7818eef87d20df86b5",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851733e6d7818eef87d20df86b5",
              "width": 64
            }
          ],
          "name": "Pony"
        },
        "artists": [
          {
            "name": "Rex Orange County"
          }
        ],
        "href": "https://api.spotify.com/v1/tracks/4EWBhKf1fOFnyMtUzACXEc",
        "name": "Pluto Projector"
      }
    },
    {
      "added_by": {
        "id": "jckwind11"
      },
      "track": {
        "album": {
          "href": "https://api.spotify.com/v1/albums/41GuZcammIkupMPKH2OJ6I",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273072e9faef2ef7b6db63834a3",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02072e9faef2ef7b6db63834a3",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851072e9faef2ef7b6db63834a3",
              "width": 64
            }
          ],
          "name": "ASTROWORLD"
        },
        "artists": [
          {
            "name": "Travis Scott"
          }
        ],
        "href": "https://api.spotify.com/v1/tracks/6NMtzpDQBTOfJwMzgMX0zl",
        "name": "SKELETONS"
      }
    },
    {
      "added_by": {
        "id": "jckwind11"
      },
      "track": {
        "album": {
          "href": "https://api.spotify.com/v1/albums/6dVIqQ8qmQ5GBnJ9shOYGE",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273c8b444df094279e70d0ed856",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02c8b444df094279e70d0ed856",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851c8b444df094279e70d0ed856",
              "width": 64
            }
          ],
          "name": "OK Computer"
        },
        "artists": [
          {
            "name": "Radiohead"
          }
        ],
        "href": "https://api.spotify.com/v1/tracks/10nyNJ6zNy2YVYLrcwLccB",
        "name": "No Surprises"
      }
    }
  ]
}
