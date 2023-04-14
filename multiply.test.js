const multiply = require('./multiply');

test('multiply 2 by 3 to equal 6', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('multiply 4 by 5 to equal 20', () => {
  expect(multiply(4, 5)).toBe(20);
});

test('multiply 0 by 10 to equal 0', () => {
  expect(multiply(0, 10)).toBe(0);
});
