///<reference path="../../../typescript-def/node.d.ts"/>

import net = module("net");

import Client = module("Client");
import Socket = module("../Socket");

export class CGClient extends Socket.Socket implements Client.Client {

    public type = "client";
    private client;

    constructor(
        ip: string = "127.0.0.1",
        port: number = 7777
    ) {
        super(ip, port);
        this.logger.info(this.type, "created", ip, port);
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

    onData(data): void {
        var _this = this;
        super.onData(data);

        console.log(data);
        setTimeout(()=> {
            _this.client.write("Wattup dawg?");
        }, 2000);
    }
}