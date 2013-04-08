///<reference path="../../typescript-def/logg.d.ts"/>

import Connection = module("Connection");
import logging = module("logg");

export interface SocketSettings {
    ip ?: string;
    port ?: number;
    errorCallback : (error) => void;
    messageCallback : (message) => void;
}

export class Socket {

    public logger;
    public type: string;
    public encoding = "utf8";

    public messageCallback: (data)=>void;
    public errorCallback: (data)=>void;

    public ip: string;
    public port: number;

    constructor(
        options: SocketSettings
    ) {

        this.ip = options.ip || "127.0.0.1";
        this.port = options.port || 7777;

        this.messageCallback = options.messageCallback;
        this.errorCallback = options.errorCallback;

        this.logger = logging.getLogger("cg");
    }

    public onData(data): void {
        this.logger.info(this.type, "client data");
        this.messageCallback(data);
    }

    public onEnd(a, b, c): void {
        this.logger.info(this.type, "client end");
    }

    public onError(error): void {
        this.logger.error(this.type, error);
        this.errorCallback(error);
    }

    public onClose(a, b, c): void {
        this.logger.info(this.type, "client close");
    }
}