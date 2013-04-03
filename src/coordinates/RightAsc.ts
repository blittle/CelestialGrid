///<reference path="../../typescript-def/numeraljs.d.ts"/>

import numeral = module("numeral");
import Spherical = module("Spherical");

export interface RightAscLiteral {
    hour: number;
    minute: number;
    second: number;
}

export class RightAsc extends Spherical.Spherical {

    constructor(value: number) {
        super(value);
    }

    getHour(): number {
        return this.getBaseFromNum(this._value);
    }

    getValue(): RightAscLiteral {
        return {
            hour: this.getHour(),
            minute: this.getMinute(),
            second: this.getSecond()
        }
    }

    toString(): string {
        var hour   = this.getHour(),
            minute = this.getMinute(),
            second = this.getSecond();

        return hour + "h " + minute + "m " + second + "s";
    }

    _getBase(): number {
        return this.getHour();
    }
}