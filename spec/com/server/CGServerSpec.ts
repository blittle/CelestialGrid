///<reference path="../../../typescript-def/jasmine.d.ts"/>
///<reference path="../../../typescript-def/node.d.ts"/>

import MockServerConnection = module("../../../src/com/connection/server/MockServerConnection");
import CGServer = module("../../../src/com/server/CGServer");

describe("CGServer", () => {

    var server;

    beforeEach(()=> {
        server = new CGServer.CGServer(MockServerConnection.CGServer);
    });

    it("Should start with defaults", () => {
        expect(server.ip).toEqual("127.0.0.1");
        expect(server.port).toEqual(7777);
    });

    it("Should create the cg server", () => {
        expect(server.ServerClass).toEqual(MockServerConnection.CGServer);
        expect(server.server).toBeDefined();
        expect(server.server instanceof MockServerConnection.CGServer).toBeTruthy();
    });

});