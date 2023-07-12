"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _PlaybackTimer_seek, _PlaybackTimer_timer;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaybackTimer = exports.kewToJSPromise = exports.jsPromiseToKew = exports.getServerConnectParams = exports.encodeBase64 = exports.getNetworkInterfaces = void 0;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const kew_1 = __importDefault(require("kew"));
const os_1 = __importDefault(require("os"));
function getNetworkInterfaces() {
    const result = {};
    for (const [ifName, addresses] of Object.entries(os_1.default.networkInterfaces())) {
        const filteredAddresses = addresses?.filter((ni) => ni.family === 'IPv4' && !ni.internal) || [];
        if (filteredAddresses.length > 0) {
            result[ifName] = filteredAddresses.map((addr) => ({
                address: addr.address,
                mac: addr.mac
            }));
        }
    }
    return result;
}
exports.getNetworkInterfaces = getNetworkInterfaces;
function encodeBase64(str) {
    return Buffer.from(str).toString('base64');
}
exports.encodeBase64 = encodeBase64;
function getServerConnectParams(server, serverCredentials, connectType) {
    const params = {
        host: connectType === 'rpc' ? `http://${server.ip}` : server.ip,
        port: connectType === 'rpc' ? server.jsonPort : server.cliPort || '9090'
    };
    if (serverCredentials && serverCredentials[server.name]) {
        const { username, password } = serverCredentials[server.name];
        params.username = username;
        params.password = password;
    }
    return params;
}
exports.getServerConnectParams = getServerConnectParams;
function jsPromiseToKew(promise) {
    const defer = kew_1.default.defer();
    promise.then((result) => {
        defer.resolve(result);
    })
        .catch((error) => {
        defer.reject(error);
    });
    return defer.promise;
}
exports.jsPromiseToKew = jsPromiseToKew;
function kewToJSPromise(promise) {
    // Guard against a JS promise from being passed to this function.
    if (typeof promise.catch === 'function' && typeof promise.fail === undefined) {
        // JS promise - return as is
        return promise;
    }
    return new Promise((resolve, reject) => {
        promise.then((result) => {
            resolve(result);
        })
            .fail((error) => {
            reject(error);
        });
    });
}
exports.kewToJSPromise = kewToJSPromise;
class PlaybackTimer {
    constructor() {
        _PlaybackTimer_seek.set(this, void 0);
        _PlaybackTimer_timer.set(this, void 0);
        __classPrivateFieldSet(this, _PlaybackTimer_seek, 0, "f");
        __classPrivateFieldSet(this, _PlaybackTimer_timer, null, "f");
    }
    start(seek = 0) {
        this.stop();
        __classPrivateFieldSet(this, _PlaybackTimer_seek, seek, "f");
        __classPrivateFieldSet(this, _PlaybackTimer_timer, setInterval(() => {
            __classPrivateFieldSet(this, _PlaybackTimer_seek, __classPrivateFieldGet(this, _PlaybackTimer_seek, "f") + 1000, "f");
        }, 1000), "f");
    }
    stop() {
        if (__classPrivateFieldGet(this, _PlaybackTimer_timer, "f")) {
            clearInterval(__classPrivateFieldGet(this, _PlaybackTimer_timer, "f"));
            __classPrivateFieldSet(this, _PlaybackTimer_timer, null, "f");
        }
        __classPrivateFieldSet(this, _PlaybackTimer_seek, 0, "f");
    }
    getSeek() {
        return __classPrivateFieldGet(this, _PlaybackTimer_seek, "f");
    }
}
exports.PlaybackTimer = PlaybackTimer;
_PlaybackTimer_seek = new WeakMap(), _PlaybackTimer_timer = new WeakMap();
module.exports = {
    getNetworkInterfaces,
    encodeBase64,
    getServerConnectParams,
    jsPromiseToKew,
    kewToJSPromise,
    PlaybackTimer
};
//# sourceMappingURL=Util.js.map