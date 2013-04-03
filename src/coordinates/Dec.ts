import Spherical = module("Spherical");

export interface DeclinationLiteral {
    degree: number;
    minute: number;
    second: number;
}

export class Declination extends Spherical.Spherical {

    constructor(value: number) {
        super(value);
    }

    getDegree(): number {
        return this.getBaseFromNum(this._value);
    }

    getValue(): DeclinationLiteral {
        return {
            degree: this.getDegree(),
            minute: this.getMinute(),
            second: this.getSecond()
        }
    }

    toString(): string {
        var degree = this.getDegree(),
            minute = this.getMinute(),
            second = this.getSecond();

        return degree + "deg " + minute + "' " + second + "\"";
    }

    _getBase(): number {
        return this.getDegree();
    }
}