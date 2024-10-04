const { suma } = require('../suma');

test('suma correctamente dos números', () => {
    expect(suma(2, 3)).toBe(5);
    expect(suma(-1, 1)).toBe(0);
    expect(suma(0, 0)).toBe(0);
});
