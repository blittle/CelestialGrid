import Observatory = module("Observatory");
import ServerConnection = module("../com/connection/server/ServerConnection");
import CGServer = module("../com/server/CGServer");
import RovorCallbacks = module("RovorCallbacks");

export class Rovor implements Observatory.Observatory {
    public longName = "Remote Observatory for Variable Object Research";
    public name = "ROVOR";

    public location = {
        latitude: "",
        longitude: ""
    };

    public ip = "127.0.0.1";
    public port = 7777;

    public status = new RovorStatus();

    public connection: ServerConnection.ServerConnection;
    public callbacks: RovorCallbacks.RovorCallbacks;

    private server: any;
    private statusInterval: any;

    constructor() {
        this.callbacks = new RovorCallbacks.RovorCallbacks(this);

        this.server = new CGServer.CGServer(
            this.connection,
            this.callbacks,
            this.ip,
            this.port
        );
    }

    startServer(): void {
        this.server.start();
    }

    startPollStatus(): void {
        var server = this.server;

        this.statusInterval = setInterval(()=> {
            server.getStatus();
        }, 5000);
    }

    endPollStatus(): void {
        clearInterval(this.statusInterval);
    }
}

export class RovorStatus implements Observatory.ObservatoryStatus {
    public weather = {

    };

    public dome = {
        opened: false,
        moving: false
    };

    public telescope = {

    };

    public cameras = {

    };

//    public cameras

    constructor() {

    }
}