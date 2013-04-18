import ClientConnection = module("../connection/client/ClientConnection");
import ComCommands = module("../Commands");

var cmd = ComCommands.commands;

export class CGClient {

    private connection;

    constructor(
        private ConnectionClass?: any,
        private ip: string = "127.0.0.1",
        private port: number = 7777
    ) {
        var _this = this;

        this.ConnectionClass = this.ConnectionClass || ClientConnection.ClientConnection;

        this.connection = new this.ConnectionClass({
            ip: ip,
            port: port,
            messageCallback: (msg) => {
                _this.onMessage.call(_this, msg);
            },
            errorCallback: (err) => {
                _this.onError.call(_this, err);
            }
        })
    }

    connect(): void {
        this.connection.connect();
    }

    stop(): void {
        this.connection.stop();
    }

    onMessage(msg: any): void {

        var message = JSON.parse(msg);

        switch(message.cmd) {
            case cmd.GET_STATUS:
                this.connection.sendMessage({
                    cmd: cmd.GET_STATUS,
                    data: {
                        status: {
                            weather: {
                                temperature: "5 deg F",
                                humidity: "32"
                            },
                            dome: "Closed",
                            telescope: "Parked"
                        }
                    }
                });
                break;
            case cmd.SHUT_DOWN:
                break;
            case cmd.MOVE_DOME:
                break;
            case cmd.MOVE_TELESCOPE:
                break;
            case cmd.MOVE_FILTER:
                break;
            case cmd.OBSERVATION:
                break;
        }
    }

    onError(err: any): void {

    }
}