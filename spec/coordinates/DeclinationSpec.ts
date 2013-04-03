///<reference path="../../typescript-def/jasmine.d.ts"/>

import Declination = module("../../src/coordinates/Dec");

describe("Declination", () => {

    var dc1 = 60.8423566,
        dc2 = -45.4474566;

    it("It should correctly build degrees", () => {

        var dec = new Declination.Declination(dc1);
        expect(dec.getDegree()).toEqual(60);

        dec = new Declination.Declination(dc2);
        expect(dec.getDegree()).toEqual(-45);
    });

    it("It should correctly build arc-minutes", () => {

        var dec = new Declination.Declination(dc1);
        expect(dec.getMinute()).toEqual(50);

        dec = new Declination.Declination(dc2);
        expect(dec.getMinute()).toEqual(26);
    });

    it("It should correctly build arc-seconds", () => {
        var dec = new Declination.Declination(dc1);
        expect(dec.getSecond()).toEqual(32.48376);

        dec = new Declination.Declination(dc2);
        expect(dec.getSecond()).toEqual(50.84376);
    });

    it("It should return a literal", () => {
        var dcLit = new Declination.Declination(dc2).getValue();

        expect(dcLit.degree).toEqual(-45);
        expect(dcLit.minute).toEqual(26);
        expect(dcLit.second).toEqual(50.84376);
    });

    it("It should return a string", () => {
        var dcString = new Declination.Declination(dc2).toString();
        expect(dcString).toEqual("-45deg 26' 50.84376\"");
    });

});