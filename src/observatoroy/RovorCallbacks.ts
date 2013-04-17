import ServerCallbacks = module("../com/server/ServerCallbacks");
import Rovor = module("Rovor");

export class RovorCallbacks implements ServerCallbacks.ServerCallbacks {

    getStatusCallback(data): void {
        this.rovor.status.weather   = data.status.weather;
        this.rovor.status.telescope = data.status.telescope;
        this.rovor.status.dome      = data.status.dome;
    }

    shutDownCallback(data): void {

    }

    moveDomeCallback(data): void {

    }

    moveTelesCallback(data): void {

    }

    moveFilterCallback(data): void {

    }

    observationCallback(data): void {

    }

    constructor(private rovor: Rovor.Rovor) {

    }
}