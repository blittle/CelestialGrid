export interface TelescopeInterface {
    start(): TelescopeInterface;
    stop(): TelescopeInterface;
    isOn(): bool;
}

export class Telescope implements TelescopeInterface {

    private on: bool;

    constructor(public name: string) {

    }

    start(): Telescope {
        this.on = true;
        return this;
    }

    stop(): Telescope {
        this.on = false;
        return this;
    }

    isOn(): bool {
        return this.on;
    }

    public static getZenith(date?: Date) : Object {
        date = date || new Date();
        return {
            declination: Telescope.getCoord(date)
        }
    }

    private static getCoord(date: Date): number {
        return date.getTime();
    }

}

