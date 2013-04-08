export interface Connection {
    onConnect(a, b, c): void;
    onData(a, b, c): void;
    onEnd(a, b, c): void;
    onError(a, b, c): void;
    onClose(a, b, c): void;
}

export var commands = {

};