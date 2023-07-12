/// <reference types="node" />
import EventEmitter from 'events';
import Player from './types/Player';
import { ServerCredentials } from './types/Server';
export default class PlayerStatusMonitor extends EventEmitter {
    #private;
    constructor(player: Player, serverCredentials: ServerCredentials);
    start(): Promise<void>;
    stop(): Promise<void>;
    getPlayer(): Player;
    requestUpdate(): void;
}
//# sourceMappingURL=PlayerStatusMonitor.d.ts.map