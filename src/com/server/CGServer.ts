///<reference path="../../../typescript-def/node.d.ts"/>

import net = module("net");

import Server = module("Server");
import Socket = module("../Socket");

export class CGServer extends Socket.Socket implements Server.Server {

    private connected = false;
    private listening = false;
    private server;

    public socket;
    public type = "server";

    constructor(
        ip: string = "127.0.0.1",
        port: number = 7777
    ) {
        super(ip, port);
        this.logger.info(this.type, "created", ip, port);
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

    onData(data): void {
        super.onData(data);
        console.log(data);

        var _this = this;

        setTimeout(()=>{
            _this.socket.write(JSON.stringify({"hello": "world"}));
        }, 1000);
    }
}