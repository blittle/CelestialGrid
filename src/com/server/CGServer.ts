///<reference path="../../../typescript-def/node.d.ts"/>

import net = module("net");

import Server = module("Server");
import Socket = module("../Socket");

export class CGServer extends Socket.Socket implements Server.Server {

    private connected = false;
    private listening = false;
    private server;

    public type = "server";

    constructor(
        ip: string = "127.0.0.1",
        port: string = "7777"
    ) {
        super(ip, port);
        this.logger.info(this.type, "created", ip, port);
    }

    start(): void {

        var _this = this;

        this.server = net.createServer(function (socket) {

            _this.logger.info(this.type, "connected");
            _this.connected = true;

            socket.on("data", _this.onData);
            socket.on("end", _this.onEnd);
            socket.on("error", _this.onError);
            socket.on("close", _this.onClose);
        });


        _this.listening = true;
        this.logger.info(this.type, "listening", this.ip, this.port);
    }

    stop(): void {
        this.listening = false;
        this.connected = false;
        this.server.close();
    }
}