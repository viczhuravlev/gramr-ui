module.exports = {
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|tests).[tj]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|pdf)$':
      '<rootDir>/config/jest/fileMock.js',
    '\\.(css)$': '<rootDir>/config/jest/styleMock.js',
  },
};
