var Telescope = (function () {
    function Telescope(name) {
        this.name = name;
    }
    Telescope.prototype.start = function () {
        this.on = true;
        return this;
    };
    Telescope.prototype.stop = function () {
        this.on = false;
        return this;
    };
    Telescope.prototype.isOn = function () {
        return this.on;
    };
    return Telescope;
})();
exports.Telescope = Telescope;
//@ sourceMappingURL=Telescope.js.map
