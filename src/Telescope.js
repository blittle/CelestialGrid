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
    Telescope.getZenith = function getZenith(date) {
        date = date || new Date();
        return {
            declination: Telescope.getCoord(date)
        };
    };
    Telescope.getCoord = function getCoord(date) {
        return date.getTime();
    };
    return Telescope;
})();
exports.Telescope = Telescope;
//@ sourceMappingURL=Telescope.js.map
