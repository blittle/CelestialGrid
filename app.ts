import CGServer = module("src/com/server/CGServer");
import CGClient = module("src/com/client/CGClient");

var server = new CGServer.CGServer();
var client = new CGClient.CGClient();

server.start();
client.connect();



