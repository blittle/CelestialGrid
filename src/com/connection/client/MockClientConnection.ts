///<reference path="../../../../typescript-def/node.d.ts"/>
import Connection = module("../Connection");

export class MockClientConnection extends Connection.Connection {

    public type = "client";

    constructor(
        options : Connection.ConnectionSettings
    ) {
        super(options);
        this.logger.info(this.type, "created", options.ip, options.port);
    }

    connect(): void {
        this.connected = true;
    }

    onTimeout(a, b, c): void {

    }

    disconnect(): void {
        this.connected = false;
    }
}