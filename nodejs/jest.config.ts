import type { Config } from "@jest/types";
import { defaultsESM as tsjPreset } from "ts-jest/presets";

const config: Config.InitialOptions = {
  ...tsjPreset,
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
  moduleNameMapper: {
    "^(\\./|../)(.*)\\.js$": "$1$2", // This is to handle ESM imports in Jest the .js extension
  },
};

export default config;
