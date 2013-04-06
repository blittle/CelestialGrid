///<reference path="../../typescript-def/logg.d.ts"/>

import Connection = module("Connection");
import logging = module("logg");

export class Socket {

    public logger;
    public type: string;

    constructor(
        public ip: string = "127.0.0.1",
        public port: string = "7777"
    ) {
        this.logger = logging.getLogger("cg");
    }

    public onData(a, b, c): void {
        this.logger.info(this.type, "client data");
        console.log(a);
    }

    public onEnd(a, b, c): void {
        this.logger.info(this.type, "client end");
    }

    public onError(error): void {
        this.logger.error(this.type, error);
    }

    public onClose(a, b, c): void {
        this.logger.info(this.type, "client close");
    }
}