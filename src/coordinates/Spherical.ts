///<reference path="../../typescript-def/numeraljs.d.ts"/>

import numeral = module("numeral");

export class Spherical {
    constructor(value: number) {}
    public _value;
    public _precision = '00000000000';

    getBaseFromNum(number: any) {
        return (number.format('0.0') * 1) - (number.format('.0') * 1);
    }
}