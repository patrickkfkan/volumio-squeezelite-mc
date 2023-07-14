"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PLUGIN_CONFIG_SCHEMA = void 0;
const defaultBasicPlayerConfig = {
    playerNameType: 'hostname',
    playerName: '',
    dsdPlayback: 'auto'
};
const defaultManualPlayerConfig = {
    startupOptions: ''
};
exports.PLUGIN_CONFIG_SCHEMA = {
    playerConfigType: { defaultValue: 'basic', json: false },
    basicPlayerConfig: { defaultValue: defaultBasicPlayerConfig, json: true },
    manualPlayerConfig: { defaultValue: defaultManualPlayerConfig, json: true },
    serverCredentials: { defaultValue: {}, json: true }
};
//# sourceMappingURL=Config.js.map