///<reference path="../../typescript-def/numeraljs.d.ts"/>

import numeral = module("numeral");

export class Spherical {

    public _value;
    public _precision = '0000000000';

    constructor(value: number) {
        this._value = numeral.fn.set(value);
    }

    _getBase(): number {
        return 0;
    }

    getMinute(): number {
        var val = this._value.clone().subtract(this._getBase())
            .multiply(60);

        return Math.abs(this.getBaseFromNum(val));
    }

    getSecond(): number {
        var val = this._value.clone().subtract(this._getBase())
            .multiply(60);

        return Math.abs(val.subtract(this.getBaseFromNum(val))
            .multiply(60).format("0." + this._precision) * 1);
    }

    getBaseFromNum(number: any) {
        return (number.format('0.0') * 1) - (number.format('.0') * 1);
    }
}