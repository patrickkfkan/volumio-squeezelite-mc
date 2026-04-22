import EventEmitter from 'events';
import type Player from './types/Player';
import { type ServerCredentials } from './types/Server';
export declare enum PlayerFinderStatus {
    Started = "started",
    Stopped = "stopped"
}
export interface PlayerFinderOptions {
    serverCredentials?: ServerCredentials;
    eventFilter?: {
        playerIP?: string | string[];
        playerName?: string | string[];
        playerId?: string | string[];
    };
}
export interface PlayerFinderEvents {
    found: (players: Player[]) => void;
    lost: (players: Player[]) => void;
    error: (errorMessage: string) => void;
}
export default class PlayerFinder extends EventEmitter {
    #private;
    constructor();
    start(opts?: PlayerFinderOptions): void;
    stop(): Promise<void>;
    getStatus(): PlayerFinderStatus;
    on<E extends keyof PlayerFinderEvents>(eventName: E, listener: PlayerFinderEvents[E]): this;
}
//# sourceMappingURL=PlayerFinder.d.ts.map