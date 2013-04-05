///<reference path="../../../typescript-def/node.d.ts"/>

import net = module("net");

import Client = module("Client");
import Socket = module("../Socket");

export class CGServer extends Socket.Socket implements Client.Client {

    constructor(
        ip: string = "127.0.0.1",
        port: string = "7777"
    ) {
        this.type = this.type;
        super(ip, port);
    }

    connect() : void {

    }

    onTimeout(a, b, c): void {

    }
}