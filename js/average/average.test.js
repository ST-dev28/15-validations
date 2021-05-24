const average = require('./average');

test('sum all and devide of quantity', () => {
    expect(average(6, 14)).toBe(10);
});