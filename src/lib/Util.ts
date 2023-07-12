// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import libQ from 'kew';

import os from 'os';
import Server, { ServerCredentials } from './types/Server';

export interface ServerConnectParams {
  host?: string;
  port?: string;
  username?: string;
  password?: string;
}

export interface NetworkInterfaces {
  [ifName: string]: {
    address: string;
    mac: string;
  }[];
}

export function getNetworkInterfaces() {
  const result: NetworkInterfaces = {};
  for (const [ ifName, addresses ] of Object.entries(os.networkInterfaces())) {
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

export function encodeBase64(str: string) {
  return Buffer.from(str).toString('base64');
}

export function getServerConnectParams(server: Server, serverCredentials: ServerCredentials | undefined, connectType: 'rpc' | 'cli') {
  const params: ServerConnectParams = {
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

export function jsPromiseToKew<T>(promise: Promise<T>): any {
  const defer = libQ.defer();

  promise.then((result) => {
    defer.resolve(result);
  })
    .catch((error) => {
      defer.reject(error);
    });

  return defer.promise;
}

export function kewToJSPromise(promise: any): Promise<any> {
  // Guard against a JS promise from being passed to this function.
  if (typeof promise.catch === 'function' && typeof promise.fail === undefined) {
    // JS promise - return as is
    return promise;
  }
  return new Promise((resolve, reject) => {
    promise.then((result: any) => {
      resolve(result);
    })
      .fail((error: any) => {
        reject(error);
      });
  });
}

export class PlaybackTimer {
  #seek: number;
  #timer: NodeJS.Timeout | null;

  constructor() {
    this.#seek = 0;
    this.#timer = null;
  }

  start(seek = 0) {
    this.stop();
    this.#seek = seek;
    this.#timer = setInterval(() => {
      this.#seek += 1000;
    }, 1000);
  }

  stop() {
    if (this.#timer) {
      clearInterval(this.#timer);
      this.#timer = null;
    }
    this.#seek = 0;
  }

  getSeek() {
    return this.#seek;
  }

}

module.exports = {
  getNetworkInterfaces,
  encodeBase64,
  getServerConnectParams,
  jsPromiseToKew,
  kewToJSPromise,
  PlaybackTimer
};
