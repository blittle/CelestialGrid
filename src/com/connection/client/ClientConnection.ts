///<reference path="../../../../typescript-def/node.d.ts"/>

import net = module("net");
import Connection = module("../Connection");

export class ClientConnection extends Connection.Connection {

    public type = "client";

    constructor(options : Connection.ConnectionSettings) {
        super(options);
        this.logger.info(this.type, "created", options.ip, options.port);
    }

    connect() : void {

        var _this = this;

        this.logger.info(_this.type, "trying to connect", this.ip, this.port);

        var client = new net.Socket();

        client.connect(this.port, this.ip, () => {
            _this.connected = true;
            _this.logger.info(_this.type, "connected", _this.ip, _this.port);
        });

        client.setEncoding(this.encoding);

        client.on('data', (data)=> {
            _this.onData.call(_this, data);
        });

        client.on("end", (err) => {
            _this.onEnd.call(_this, err);
        });

        client.on("error", (err) => {
            _this.onError.call(_this, err);
        });

        client.on("close", (err)=> {
            _this.onClose.call(_this, err);
        });

        client.on("timeout", (err)=> {
            _this.onTimeout.call(_this, err);
        });

        this.socket = client;
    }

    onTimeout(a, b, c): void {

    }

    disconnect(): void {
        this.connected = false;
        this.socket.destroy();
    }
}