declare class ControllerSqueezeliteMC {
    #private;
    constructor(context: any);
    getUIConfig(): any;
    onVolumioStart(): any;
    onStart(): any;
    getConfigurationFiles(): string[];
    unsetVolatile(): void;
    onUnsetVolatile(): void;
    configSaveServerCredentials(data?: Record<string, string>): void;
    configSaveSqueezeliteSettings(data: any): void;
    stop(): any;
    play(): any;
    pause(): any;
    resume(): any;
    seek(position: number): any;
    next(): any;
    previous(): any;
    repeat(value: boolean, repeatSingle: boolean): any;
    random(value: boolean): any;
    onStop(): any;
}
export = ControllerSqueezeliteMC;
//# sourceMappingURL=index.d.ts.map