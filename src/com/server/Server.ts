///<reference path="../../../typescript-def/node.d.ts"/>

import net = module("net");

import Socket = module("../Socket");

export class Server extends Socket.Socket {

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

        var _this = this;

        this.server = net.createServer(function (socket) {

            _this.logger.info(_this.type, "connected");
            _this.connected = true;

            socket.on("data", (data)=> {
                _this.onData.call(_this, data);
            });
            socket.on("end", (err)=> {
                _this.onEnd.call(_this, err);
            });
            socket.on("error", (err)=> {
                _this.onError.call(_this, err);
            });
            socket.on("close", (err)=> {
                _this.onClose.call(_this, err);
            });

            socket.setEncoding(_this.encoding);

            _this.socket = socket;
        });

        this.server.listen(this.port, this.ip);

        _this.listening = true;
        this.logger.info(this.type, "listening", this.ip, this.port);
    }

    stop(): void {
        this.listening = false;
        this.connected = false;
        this.server.close();
        this.socket.destroy();
    }

    sendMessage(message): void {
        this.socket.write(JSON.stringify(message));
    }
}