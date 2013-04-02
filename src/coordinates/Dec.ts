import Spherical = module("Spherical");

export interface DeclinationLiteral {
    degree: number;
    minute: number;
    second: number;
}

export class Declination extends Spherical.Spherical {
    getDegree(): number {
        return 0;
    }

    getMinute(): number {
        return 0;
    }

    getSecond(): number {
        return 0;
    }

    getValue(): DeclinationLiteral {
        return {
            degree: 0,
            minute: 0,
            second: 0
        }
    }

    toString(): string {
        var degree = 0,
            minute = 0,
            second = 0;

        return degree + "deg " + minute + "m " + second + "s";
    }
}