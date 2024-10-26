module.exports = {
  transform: {
    "^.+\\.svelte$": [
      "svelte-jester",
      {
        preprocess: true
      }
    ],
    "^.+\\.ts$": [
      "ts-jest",
      {
        useESM: true
        // optional: separate tsconfig for tests
        // "tsconfig": "tsconfig.spec.json",
      }
    ],
  },
  moduleFileExtensions: [
    "js",
    "ts",
    "svelte"
  ],
  extensionsToTreatAsEsm: [
    ".svelte",
    ".ts"
  ],
  testEnvironment: "jsdom",
  // You can add other Jest settings here
};