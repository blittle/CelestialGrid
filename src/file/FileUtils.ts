///<reference path="../../typescript-def/node.d.ts"/>
///<reference path="../../typescript-def/underscore.d.ts"/>
///<reference path="../../typescript-def/logg.d.ts"/>

import fs = module("fs");
import _ = module("underscore");
import logging = module("logg");

var logger = logging.getLogger("cg");

export class FileUtils {

    /**
     * Write an object to a csv file.
     * @param obj - A double array, each outer array represents a line in the output csv. Each element of the sub-array
     * represents an element in each line of the output csv.
     * @param filePath
     * @param callback
     */
    public static writeCSV(obj: any, filePath: string, callback?: Function): void {

        var outputString = "";

        _.each(obj, (line, i) => {
            if(i !== 0) outputString += "\r\n";

            _.each(line, function(el, i) {
                outputString +=  i === 0 ? el : "," + el;
            });
        });

        fs.writeFile(filePath, outputString, (err) => {

            if(err) {
                logger.error("Cannot write csv", filePath, err);
            } else {
                logger.info("Write csv", filePath);
            }

            callback(err);
        });
    }

    public static readCSV(filePath: string, callback?: Function): void {
        fs.readFile(filePath, (err, data) => {
            var lines;

            if(err) {
                logger.error("ERROR: Cannot read csv", filePath, err);
                callback(err);
                return;
            }

            logger.info("Read csv", filePath);

            lines = (data+"").split("\r\n");

            _.each(lines, (line, i) => {
                lines[i] = (line+"").split(",");
            });

            callback(null, lines);

        });
    }

    public static writeJSON(obj: Object, filePath: string, callback?: Function): void {
        fs.writeFile(filePath, obj, (err) => {

            if(err) {
                logger.error("Cannot write json", filePath, err);
            } else {
                logger.info("Write json", filePath);
            }


            callback(err);
        });
    }

    public static deleteFile(filePath: string, callback?: Function) {
        fs.unlink(filePath, (err) => {

            if(err) {
                logger.error("Cannot delete file", filePath, err);
            } else {
                logger.info("Deleted file", filePath);
            }

            callback(err);
        });
    }
}