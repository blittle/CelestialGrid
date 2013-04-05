///<reference path="../../../typescript-def/node.d.ts"/>

import net = module("net");

import Client = module("Client");
import Socket = module("../Socket");

export class CGServer extends Socket.Socket implements Client.Client {

    constructor() {
        super();
    }

    connect() : void {

    }

    onTimeout(a, b, c): void {

    }
}