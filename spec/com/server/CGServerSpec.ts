///<reference path="../../../typescript-def/jasmine.d.ts"/>
///<reference path="../../../typescript-def/node.d.ts"/>

import MockServerConnection = module("../../../src/com/connection/server/MockServerConnection");
import CGServer = module("../../../src/com/server/CGServer");
import ConnectionCommands = module("../../../src/com/Commands");

var cmd = ConnectionCommands.commands;

describe("CGServer", () => {

    var server;

    beforeEach(()=> {
        server = new CGServer.CGServer(MockServerConnection.MockServerConnection);
    });

    it("Should start with defaults", () => {
        expect(server.ip).toEqual("127.0.0.1");
        expect(server.port).toEqual(7777);
    });

    it("Should create the cg server", () => {
        expect(server.ServerClass).toEqual(MockServerConnection.MockServerConnection);
        expect(server.server).toBeDefined();
        expect(server.server instanceof MockServerConnection.MockServerConnection).toBeTruthy();
    });

    it("Should listen for incoming connections", ()=> {
        spyOn(server.server, "start").andCallThrough();
        server.start();
        expect(server.server.listening).toBeTruthy();
        expect(server.server.start).toHaveBeenCalled();
    });

    it("Should pull status", ()=> {
        server.start();
        expect(server.server.connected).toBeTruthy();
        server.server.connection = {
            write: jasmine.createSpy("write")
        }

        server.getStatus();
        expect(server.server.connection.write).toHaveBeenCalled();
        expect(server.server.connection.write).toHaveBeenCalledWith(
            JSON.stringify({
                cmd: cmd.GET_STATUS
            })
        );
    });

    it("On message from client should delegate to onMessage callback", ()=> {
        spyOn(server, "onMessage");

        var testData = JSON.stringify({
            data: "SomeData"
        });

        server.server.onData(testData);

        expect(server.onMessage).toHaveBeenCalled();
        expect(server.onMessage).toHaveBeenCalledWith(testData);
    });

    it("Should parse " + cmd.GET_STATUS, ()=> {

        server.server.onData(JSON.stringify({
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
        }));

        expect(true).toBeTruthy();
    });

    it("Should not die on bad message", ()=> {
        server.onMessage({
            cmd: cmd.GET_STATUS
        });

        expect(true).toBeTruthy();
    });

});