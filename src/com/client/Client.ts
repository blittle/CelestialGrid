export interface Client {
    connect(): void;
    onTimeout(a, b, c): void;
}