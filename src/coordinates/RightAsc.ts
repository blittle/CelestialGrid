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

        this._value = numeral.fn.set(value);
    }

    getHour(): number {
        return this.getBaseFromNum(this._value);
    }

    getMinute(): number {
        var val = this._value.subtract(this.getHour())
            .multiply(60);
        return this.getBaseFromNum(val);
    }

    getSecond(): number {
        var val = this._value.subtract(this.getHour())
            .multiply(60);

        return val.subtract(this.getBaseFromNum(val))
            .multiply(60).format("0." + this._precision) * 1;
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
}