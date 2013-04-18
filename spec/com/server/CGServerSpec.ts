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
        expect(server.ConnectionClass).toEqual(MockServerConnection.MockServerConnection);
        expect(server.connection).toBeDefined();
        expect(server.connection instanceof MockServerConnection.MockServerConnection).toBeTruthy();
    });

    it("Should listen for incoming connections", ()=> {
        spyOn(server.connection, "start").andCallThrough();
        server.start();
        expect(server.connection.listening).toBeTruthy();
        expect(server.connection.start).toHaveBeenCalled();
    });

    it("Should pull status", ()=> {
        server.start();
        expect(server.connection.connected).toBeTruthy();
        server.connection.socket = {
            write: jasmine.createSpy("write")
        }

        server.getStatus();
        expect(server.connection.socket.write).toHaveBeenCalled();
        expect(server.connection.socket.write).toHaveBeenCalledWith(
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

        server.connection.onData(testData);

        expect(server.onMessage).toHaveBeenCalled();
        expect(server.onMessage).toHaveBeenCalledWith(testData);
    });

    it("Should parse " + cmd.GET_STATUS, ()=> {

        server.connection.onData(JSON.stringify({
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