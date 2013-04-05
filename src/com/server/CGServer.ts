///<reference path="../../../typescript-def/node.d.ts"/>

import net = module("net");

import Server = module("Server");
import Socket = module("../Socket");

export class CGServer extends Socket.Socket implements Server.Server {

    private connected = false;
    private listening = false;
    private server;

    constructor(
        ip: string = "127.0.0.1",
        port: string = "7777"
    ) {
        this.type = this.type;
        super(ip, port);
    }

    start(): void {

        var _this = this;

        this.server = net.createServer(function (socket) {
            _this.logger.info(type, "listening", _this.ip, _this.port);
            _this.listening = true;
            socket.addListener("connect", _this.onConnect);
            socket.addListener("data", _this.onData);
            socket.addListener("end", _this.onEnd);
            socket.addListener("error", _this.onError);
            socket.addListener("close", _this.onClose);
        });
    }

    stop(): void {
        this.listening = false;
    }
}