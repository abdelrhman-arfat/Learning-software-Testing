import type { Config } from "@jest/types";
import { defaultsESM as tsjPreset } from "ts-jest/presets";

const config: Config.InitialOptions = {
  ...tsjPreset,
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".ts"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
};

export default config;
