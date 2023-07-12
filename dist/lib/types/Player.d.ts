import Server from './Server';
interface Player {
    id: string;
    uuid: string;
    ip: string;
    name: string;
    server: Server;
}
export interface PlayerConfig {
    playerName: string;
    card: string;
    mixerType: string;
    mixer: string | null;
    dsdFormat: string | null;
    invalidated: boolean;
}
export interface PlayerStatus {
    mode: 'play' | 'stop' | 'pause';
    time?: number;
    volume?: number;
    repeatMode?: number;
    shuffleMode?: number;
    canSeek?: number;
    currentTrack?: {
        type?: string;
        title?: string;
        artist?: string;
        trackArtist?: string;
        albumArtist?: string;
        album?: string;
        remoteTitle?: string;
        artworkUrl?: string;
        coverArt?: string;
        duration?: number;
        sampleRate?: number;
        sampleSize?: number;
        bitrate?: string;
    };
}
export declare enum PlayerRunState {
    Normal = 0,
    StartError = -1,
    ConfigRequireRestart = -2,
    ConfigRequireRevalidate = -3
}
export default Player;
//# sourceMappingURL=Player.d.ts.map