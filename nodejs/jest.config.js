"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const presets_1 = require("ts-jest/presets");
const config = {
    ...presets_1.defaultsESM,
    testEnvironment: "node",
    extensionsToTreatAsEsm: [".ts"],
    transform: {
        "^.+\\.ts$": "ts-jest",
    },
    globals: {
        "ts-jest": {
            useESM: true,
        },
    },
};
exports.default = config;
