var AutoScope = require('./src/AutoScope')
var autoscope = new AutoScope.AutoScope();
autoscope.start();
console.log("Telescope booted? ", autoscope.isOn());
autoscope.stop();
console.log("Telescope booted? ", autoscope.isOn());
//@ sourceMappingURL=app.js.map
