///<reference path="../../typescript-def/logg.d.ts"/>

import Connection = module("Connection");
import logging = module("logg");

export class Socket {

    public logger;

    constructor(
        private ip: string = "127.0.0.1",
        private port: string = "7777"
    ) {
        this.logger = logging.getLogger("cg");
    }

    public onConnect(a, b, c): void {
        this.logger.info("CGServer", "client connected");
    }

    public onData(a, b, c): void {
        this.logger.info("CGServer", "client data");
    }

    public onEnd(a, b, c): void {
        this.logger.info("CGServer", "client end");
    }

    public onError(a, b, c): void {
        this.logger.info("CGServer", "client error");
    }

    public onClose(a, b, c): void {
        this.logger.info("CGServer", "client close");
    }
}