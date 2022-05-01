import { SpotifySong } from './SpotifySong';

export class SpotifyPlaylistTracksResponse {
    name: string;
    description: string;
    tracks: {
        items: SpotifySong[];
    }
}