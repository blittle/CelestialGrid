///<reference path="../../typescript-def/node.d.ts"/>
///<reference path="../../typescript-def/underscore.d.ts"/>

import fs = module("fs");
import _ = module("underscore");

export class FileUtils {

    /**
     * Write an object to a csv file.
     * @param obj - A double array, each outer array represents a line in the output csv. Each element of the sub-array
     * represents an element in each line of the output csv.
     * @param filePath
     * @param callback
     */
    public static writeCSV(obj: any, filePath: string, callback ?: Function): void {

        var outputString = "";

        _.each(obj, function(line, i) {
            if(i !== 0) outputString += "\r\n";

            _.each(line, function(el, i) {
                outputString +=  i === 0 ? el : "," + el;
            });
        });

        fs.writeFile(filePath, outputString, callback);
    }

    public static readCSV(filePath: string, callback ?: Function): void {
        fs.readFile(filePath, (err, data) => {
            var lines;

            if(err) callback(err);

            lines = (data+"").split("\r\n");

            _.each(lines, (line, i) => {
                lines[i] = (line+"").split(",");
            });

            callback(null, lines);

        });
    }

    public static writeJSON(obj: Object, filePath: string): void {

    }
}