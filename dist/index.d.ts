declare class ControllerSqueezeliteMC {
    #private;
    constructor(context: any);
    getUIConfig(): any;
    getConfigurationFiles(): string[];
    /**
     * Plugin lifecycle
     */
    onVolumioStart(): any;
    onStart(): any;
    onStop(): any;
    unsetVolatile(): void;
    onUnsetVolatile(): void;
    /**
     * Config save functions
     */
    configSaveServerCredentials(data?: Record<string, string>): void;
    configSaveSqueezeliteSettings(data: any): void;
    /**
     * Volumio playback control functions
     */
    stop(): any;
    play(): any;
    pause(): any;
    resume(): any;
    seek(position: number): any;
    next(): any;
    previous(): any;
    repeat(value: boolean, repeatSingle: boolean): any;
    random(value: boolean): any;
}
export = ControllerSqueezeliteMC;
//# sourceMappingURL=index.d.ts.map