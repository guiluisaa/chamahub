module.exports = {
  displayName: 'chamahub',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
      diagnostics: false,
    },
  },
  coverageReporters: ['json', 'html', 'text'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.(ts|tsx)',
    '!<rootDir>/src/mock/**/*.(ts|tsx)',
    '!<rootDir>/src/index.(ts|tsx)',
    '!<rootDir>/src/@types/**/*',
    '!<rootDir>/src/shared-styles/**/*',
    '!<rootDir>/node_modules/**',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/__mocks__/fileMock.ts',
    '@/(.*)$': '<rootDir>/src/$1',
    '@graphql': '<rootDir>/src/generated/graphql.tsx',

    '^styled-components': '<rootDir>/node_modules/styled-components',
  },
  testMatch: ['<rootDir>/src/**/*.test.+(ts|tsx|js|jsx)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  setupFilesAfterEnv: ['jest-canvas-mock', '<rootDir>/test/setup.ts'],
  verbose: true,
  testURL: 'http://localhost/',
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
