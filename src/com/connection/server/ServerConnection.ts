///<reference path="../../../../typescript-def/node.d.ts"/>

import net = module("net");

import Connection = module("../Connection");

export class ServerConnection extends Connection.Connection {

    private server;
    public type = "server";

    public listening = false;

    constructor(
        options : Connection.ConnectionSettings
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

            _this.connection = socket;
        });

        this.server.listen(this.port, this.ip);

        _this.listening = true;
        this.logger.info(this.type, "listening", this.ip, this.port);
    }

    stop(): void {
        this.listening = false;
        this.connected = false;
        this.server.close();
        this.connection.destroy();
    }
}