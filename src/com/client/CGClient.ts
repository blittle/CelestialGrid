import Client = module("Client");

export class CGClient {

    private client;

    constructor(
        private ClientClass?: any,
        private ip: string = "127.0.0.1",
        private port: number = 7777
    ) {
        var _this = this;

        this.ClientClass = this.ClientClass || Client.Client;

        this.client = new this.ClientClass({
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
        this.client.connect();
    }

    stop(): void {
        this.client.stop();
    }

    onMessage(msg: any): void {

        var message = JSON.parse(msg);

        switch(message.cmd) {
            case "getStatus":
                this.client.sendMessage({
                    cmd: "getStatus",
                    data: {
                        status: "wow"
                    }
                });
                break;
        }
    }

    onError(err: any): void {

    }
}