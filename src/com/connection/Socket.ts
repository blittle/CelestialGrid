export interface Socket {
    onData(data): void;
    onEnd(): void;
    onError(error): void;
    onClose(): void;
}

export var commands = {

};
