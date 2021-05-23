module.exports = {
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ['**/*.ts', '!**/typings/**'],
    coveragePathIgnorePatterns :[
        "/node_modules/",
        "/dist"
    ],
    coverageReporters: ['lcov','text'],
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
      },
    },
    preset: 'ts-jest',
    testEnvironment: 'node',
    globals: {
      'ts-jest': {
        tsconfig: './tsconfig.test.json',
      },
    },
    verbose: true,
  };
  