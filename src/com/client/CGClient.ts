///<reference path="../../../typescript-def/node.d.ts"/>

import net = module("net");

import Client = module("Client");
import Socket = module("../Socket");

export class CGClient extends Socket.Socket implements Client.Client {

    public type = "client";
    private client;

    constructor(
        ip: string = "127.0.0.1",
        port: string = "7777"
    ) {
        super(ip, port);
        this.logger.info(this.type, "created", ip, port);
    }

    connect() : void {

        var _this = this;

        this.logger.info(_this.type, "trying to connect", this.ip, this.port);

        this.client = new net.Socket();
        this.client.connect(this.port, this.ip, function() {
            _this.logger.info(_this.type, "connected", _this.ip, _this.port);
            _this.client.write("Hello!");
        });

        this.client.on('data', (data)=> {
            _this.onData.call(_this, data);
        });
        this.client.on("end", (err) => {
            _this.onEnd.call(_this, err);
        });
        this.client.on("error", (err) => {
            _this.onError.call(_this, err);
        });
        this.client.on("close", (err)=> {
            _this.onClose.call(_this, err);
        });

    }

    onTimeout(a, b, c): void {

    }
}

//var client = net.connect({port: 8124},
//    function() { //'connect' listener
//        console.log('client connected');
//        client.write('world!\r\n');
//    });
//client.on('data', function(data) {
//    console.log(data.toString());
//    client.end();
//});
//client.on('end', function() {
//    console.log('client disconnected');
//});