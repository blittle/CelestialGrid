///<reference path="../../../../typescript-def/node.d.ts"/>

import net = module("net");
import Connection = module("../Connection");

export class ClientConnection extends Connection.Connection {

    public type = "client";
    private client;

    constructor(options : Connection.ConnectionSettings) {
        super(options);
        this.logger.info(this.type, "created", options.ip, options.port);
    }

    connect() : void {

        var _this = this;

        this.logger.info(_this.type, "trying to connect", this.ip, this.port);

        var client = new net.Socket();

        client.connect(this.port, this.ip, function() {
            _this.logger.info(_this.type, "connected", _this.ip, _this.port);
            _this.client.write(JSON.stringify({"I am Chuck Norris!": "yeah"}));
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

        this.client = client;
    }

    onTimeout(a, b, c): void {

    }

    sendMessage(data): void {
        this.client.write(JSON.stringify(data));
    }

    disconnect(): void {
        this.client.destroy();
    }
}