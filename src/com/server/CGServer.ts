import ServerConnection = module("../connection/server/ServerConnection");
import Socket = module("../connection/Socket");
import ComCommands = module("../Commands");

var cmd = ComCommands.commands;

export class CGServer {

    private server;

    constructor(
        private ServerClass?: any,
        private ip: string = "127.0.0.1",
        private port: number = 7777
    ) {

        var _this = this;

        this.ServerClass = this.ServerClass || ServerConnection.ServerConnection;

        this.server = new this.ServerClass({
            ip: ip,
            port: port,
            messageCallback: (msg) => {
                _this.onMessage.call(_this, msg);
            },
            errorCallback: (err) => {
                _this.onError.call(_this, err);
            }
        });
    }

    start(): void {
        this.server.start();
    }

    stop(): void {
        this.server.stop();
    }

    getStatus(): void {
        this.server.sendMessage({
            cmd: "getStatus"
        });
    }

    onMessage(msg: any): void {

        var message = JSON.parse(msg);

        switch(message.cmd) {
            case cmd.GET_STATUS:
                console.log("STATUS:", message);
                break;
        }
    }

    onError(err: any): void {

    }
}