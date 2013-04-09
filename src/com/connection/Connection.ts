///<reference path="../../../typescript-def/logg.d.ts"/>

import Socket = module("Socket");
import logging = module("logg");

export interface ConnectionSettings {
    ip ?: string;
    port ?: number;
    errorCallback : (error) => void;
    messageCallback : (message) => void;
}

export class Connection implements Socket.Socket {

    public logger;
    public type: string;
    public encoding = "utf8";

    public messageCallback: (data)=>void;
    public errorCallback: (data)=>void;

    public ip: string;
    public port: number;

    constructor(
        options: ConnectionSettings
    ) {

        this.ip = options.ip || "127.0.0.1";
        this.port = options.port || 7777;

        this.messageCallback = options.messageCallback;
        this.errorCallback = options.errorCallback;

        this.logger = logging.getLogger("cg");
    }

    public onData(data): void {
        this.logger.info(this.type, "data");
        this.messageCallback(data);
    }

    public onEnd(): void {
        this.logger.info(this.type, "end");
    }

    public onError(error): void {
        this.logger.error(this.type, error);
        this.errorCallback(error);
    }

    public onClose(): void {
        this.logger.info(this.type, "close");
    }
}