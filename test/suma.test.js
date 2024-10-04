const suma = require('../suma');

test('suma 1 + 2 to equal 3', () => {
  expect(suma(1, 2)).toBe(3);
});

test('suma 5 + 7 to equal 12', () => {
  expect(suma(5, 7)).toBe(12);
});
