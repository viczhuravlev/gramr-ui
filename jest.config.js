module.exports = {
  notify: true,
  verbose: true,
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupTestFrameworkScriptFile: './config/enzyme.ts'
};
