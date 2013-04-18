///<reference path="../../../typescript-def/jasmine.d.ts"/>
///<reference path="../../../typescript-def/node.d.ts"/>

import MockClientConnection = module("../../../src/com/connection/client/MockClientConnection");
import CGClient = module("../../../src/com/client/CGClient");
import ConnectionCommands = module("../../../src/com/Commands");

describe("CGClient", () => {

    var client;

    beforeEach(()=> {
        client = new CGClient.CGClient(MockClientConnection.MockClientConnection);
    });

    it("Should create the cg client", () => {

    });

});