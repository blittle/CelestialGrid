import CGClient = module("src/com/client/CGClient");
import Rovor = module("src/observatoroy/Rovor");

var rovor = new Rovor.Rovor();
rovor.startServer();

var client = new CGClient.CGClient();
client.connect();

rovor.startPollStatus();