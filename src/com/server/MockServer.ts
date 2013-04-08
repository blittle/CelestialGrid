///<reference path="../../../typescript-def/node.d.ts"/>

import net = module("net");
import Socket = module("../Socket");

export class CGServer extends Socket.Socket {

    private connected = false;
    private listening = false;
    private server;

    public socket;
    public type = "server";

    constructor(
        options : Socket.SocketSettings
    ) {
        super(options);
        this.logger.info(this.type, "created", options.ip, options.port);
    }

    start(): void {
        this.listening = true;
        this.connected = true;
    }

    stop(): void {
        this.listening = false;
        this.connected = false;
    }
}