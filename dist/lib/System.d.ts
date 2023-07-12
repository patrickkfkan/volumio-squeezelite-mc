import { PlayerConfig } from './types/Player';
export declare class SystemError extends Error {
    code?: SystemErrorCode;
}
export declare enum SystemErrorCode {
    DeviceBusy = -1
}
export declare function initSqueezeliteService(config: PlayerConfig): Promise<void>;
export declare function stopSqueezeliteService(): Promise<unknown>;
export declare function getSqueezeliteServiceStatus(): Promise<string>;
export declare function getAlsaFormats(card: string): Promise<string[]>;
//# sourceMappingURL=System.d.ts.map