export interface ServerCallbacks {
    getStatusCallback   (data): void;
    shutDownCallback    (data): void;
    moveDomeCallback    (data): void;
    moveTelesCallback   (data): void;
    moveFilterCallback  (data): void;
    observationCallback (data): void;
}

export class MockServerCallback implements ServerCallbacks {
    getStatusCallback(data): void {

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

    constructor(public _scope: any = this) {

    }
}