///<reference path="../../../../typescript-def/node.d.ts"/>
import Connection = module("../Connection");

export class MockServerConnection extends Connection.Connection {

    private listening = false;
    private server;

    public type = "server";

    constructor(
        options : Connection.ConnectionSettings
    ) {
        super(options);
        this.logger.info(this.type, "created", options.ip, options.port);
    }

    start(): void {
        this.listening = true;
        this.connected = true;
    }

    stop(): void {
        this.listening = false;
        this.connected = false;
    }
}