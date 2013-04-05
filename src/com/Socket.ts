///<reference path="../../typescript-def/logg.d.ts"/>

import Connection = module("Connection");
import logging = module("logg");

export class Socket {

    public logger;
    public type: string;

    constructor(
        private ip: string = "127.0.0.1",
        private port: string = "7777"
    ) {
        this.logger = logging.getLogger("cg");
        this.logger.info(this.type, "created", ip, port);
    }

    public onConnect(a, b, c): void {
        this.logger.info(this.type, "client connected");
    }

    public onData(a, b, c): void {
        this.logger.info(this.type, "client data");
    }

    public onEnd(a, b, c): void {
        this.logger.info(this.type, "client end");
    }

    public onError(a, b, c): void {
        this.logger.info(this.type, "client error");
    }

    public onClose(a, b, c): void {
        this.logger.info(this.type, "client close");
    }
}