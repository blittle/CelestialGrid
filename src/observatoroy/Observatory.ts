import Socket = module("../com/connection/Socket");
import ServerCallbacks = module("../com/server/ServerCallbacks");

export interface LatLong {
    latitude: string;
    longitude: string;
}

export interface ObservatoryStatus {
    weather: Object;
    dome: Object;
    telescope: Object;
    cameras: Object;
}

export interface Observatory {

    status: ObservatoryStatus;

    name: string;
    location: LatLong;
    ip: string;
    port: number;

    connection: Socket.Socket;

    callbacks: ServerCallbacks.ServerCallbacks;
}