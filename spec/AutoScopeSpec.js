var AutoScope = require("../src/AutoScope")
describe("AutoScope", function () {
    var telescope;
    beforeEach(function () {
        telescope = new AutoScope.AutoScope();
    });
    it("The telescope should turn on", function () {
        telescope.start();
        expect(telescope.isOn()).toBeTruthy();
    });
});
//@ sourceMappingURL=AutoScopeSpec.js.map
