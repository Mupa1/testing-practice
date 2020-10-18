const capitalize = require('../src/capitalize');

test('it should capitalize the first letter of a string', () => {
  const str = capitalize('hello WORLD');
  expect(str).toBe('Hello world');
});

test('it should not change a string that has a number as the first letter', () => {
  const str = capitalize('1hello world');
  expect(str).toBe('1hello world');
});

test('it should not capitalize other letters apart from the first letter of a string', () => {
  const str = capitalize('hello WORLD');
  expect(str).not.toBe('Hello World');
});
