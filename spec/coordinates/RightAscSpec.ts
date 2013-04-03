///<reference path="../../typescript-def/jasmine.d.ts"/>

import RightAsc = module("../../src/coordinates/RightAsc");

describe("Right Ascension", () => {

    var ra1 = 9.8423566,
        ra2 = 10.4474566;

    it("It should correctly build hours", () => {

        var ra = new RightAsc.RightAsc(ra1);
        expect(ra.getHour()).toEqual(9);

        var ra = new RightAsc.RightAsc(ra2);
        expect(ra.getHour()).toEqual(10);
    });

    it("It should correctly build minutes", () => {

        var ra = new RightAsc.RightAsc(ra1);
        expect(ra.getMinute()).toEqual(50);

        var ra = new RightAsc.RightAsc(ra2);
        expect(ra.getMinute()).toEqual(26);
    });

    it("It should correctly build seconds", () => {

        var ra = new RightAsc.RightAsc(ra1);
        expect(ra.getSecond()).toEqual(32.48376);

        var ra = new RightAsc.RightAsc(ra2);
        expect(ra.getSecond()).toEqual(50.84376);
    });

    it("It should correctly return a literal", () => {
        var raLit = new RightAsc.RightAsc(ra1).getValue();

        expect(raLit.hour).toEqual(9);
        expect(raLit.minute).toEqual(50);
        expect(raLit.second).toEqual(32.48376);
    });

    it("It should correctly convert to a string", ()=> {
        var raString = new RightAsc.RightAsc(ra1).toString();

        expect(raString).toEqual("9h 50m 32.48376s");
    });

});