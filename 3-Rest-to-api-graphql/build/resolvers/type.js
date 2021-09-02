"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../lib/utils");
const type = {
    Season: {
        year: parent => parent.season,
        urlMovile: parent => utils_1.getWikipediaMobileUrl(parent.url)
    },
    Race: {
        name: parent => parent.raceName,
        circuit: parent => parent.Circuit,
        urlMovile: parent => utils_1.getWikipediaMobileUrl(parent.url)
    },
    Circuit: {
        id: parent => parent.circuitId,
        name: parent => parent.circuitName,
        location: parent => parent.Location,
        urlMovile: parent => utils_1.getWikipediaMobileUrl(parent.url)
    },
    Location: {
        lng: parent => parent.long,
    },
    Driver: {
        id: parent => parent.driverId,
        name: parent => parent.givenName.concat(' ').concat(parent.familyName),
        urlMovile: parent => utils_1.getWikipediaMobileUrl(parent.url)
    },
    Constructor: {
        id: parent => parent.constructorId,
        urlMovile: parent => utils_1.getWikipediaMobileUrl(parent.url)
    },
    DriverStanding: {
        driver: parent => parent.Driver,
        constructors: parent => parent.Constructors
    }
};
exports.default = type;
