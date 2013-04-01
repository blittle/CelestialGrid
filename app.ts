import AutoScope = module('src/AutoScope');
import Telescope = module('src/Telescope');

var autoscope = new AutoScope.AutoScope();

autoscope.start();

console.log("Telescope booted? ", autoscope.isOn());

autoscope.stop();

console.log("Telescope booted? ", autoscope.isOn());

console.log("Current zenith ", Telescope.Telescope.getZenith());
console.log("Current zenith with date ", Telescope.Telescope.getZenith(new Date()));



