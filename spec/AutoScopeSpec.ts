///<reference path="../typescript-def/jasmine.d.ts"/>

import AutoScope = module("../src/AutoScope");

describe("AutoScope", () => {

    var telescope;

    beforeEach(() => {
        telescope = new AutoScope.AutoScope();
    });

    it("The telescope should turn on", () => {
        telescope.start();
        expect(telescope.isOn()).toBeTruthy();
    });

});