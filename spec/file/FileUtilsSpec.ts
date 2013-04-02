///<reference path="../../typescript-def/jasmine.d.ts"/>
///<reference path="../../typescript-def/node.d.ts"/>

import FileUtils = module("../../src/file/FileUtils");
import fs = module("fs");

describe("File Utils", () => {

    var tempPath = "temp.out",
        data = [
            ["some value", "2", "3", 4],
            ["test", "3", "dsf"]
        ];

    it("Should write a csv file", () => {
        FileUtils.FileUtils.writeCSV(data, tempPath, (err) => {
            expect(err).toBeNull();
            fs.unlink(tempPath);
        });
    });

    it("Should read a csv file", (done) => {
        FileUtils.FileUtils.writeCSV(data, tempPath, () => {
            FileUtils.FileUtils.readCSV("temp.out", (err, readObject) => {
                expect(readObject).toBeDefined();
                expect(readObject.length).toEqual(2);
                expect(readObject[0][0]).toEqual("some value");
                expect(readObject[0][2]).toEqual("3");
                expect(readObject[0][3]).toEqual('4');
                expect(readObject[1][2]).toEqual("dsf");
                fs.unlink(tempPath);
                done();
            });
        });
    });

});