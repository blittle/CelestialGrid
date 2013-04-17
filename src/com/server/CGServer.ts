import ServerConnection = module("../connection/server/ServerConnection");
import Socket = module("../connection/Socket");
import ComCommands = module("../Commands");
import ServerCallbacks = module("ServerCallbacks");

var cmd = ComCommands.commands;

export class CGServer {

    private server;

    constructor(
        private ServerClass?: any,
        private serverCallbacks: ServerCallbacks.ServerCallbacks = new ServerCallbacks.MockServerCallback(),
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
            cmd: cmd.GET_STATUS
        });
    }

    onMessage(msg: any): void {

        try {
            var message = JSON.parse(msg);
        } catch(error) {
            this.server.logger.error("Cannot parse", msg, error);
            return;
        }

        switch(message.cmd) {
            case cmd.GET_STATUS:
                this.serverCallbacks.getStatusCallback(message.data);
                break;
            case cmd.SHUT_DOWN:
                this.serverCallbacks.shutDownCallback(message.data);
                break;
            case cmd.MOVE_DOME:
                this.serverCallbacks.moveDomeCallback(message.data);
                break;
            case cmd.MOVE_TELESCOPE:
                this.serverCallbacks.moveTelesCallback(message.data);
                break;
            case cmd.MOVE_FILTER:
                this.serverCallbacks.moveFilterCallback(message.data);
                break;
            case cmd.OBSERVATION:
                this.serverCallbacks.observationCallback(message.data);
                break;
        }
    }

    onError(err: any): void {

    }
}