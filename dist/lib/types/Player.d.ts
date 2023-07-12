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
export declare enum PlayerStatus {
    Normal = 0,
    StartError = -1,
    ConfigRequireRestart = -2,
    ConfigRequireRevalidate = -3
}
export default Player;
//# sourceMappingURL=Player.d.ts.map