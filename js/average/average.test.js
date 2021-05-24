const average = require('./average');

test('sum all and devide of quantity', () => {
    expect(average(10, 20, 30)).toBe(20);
});

test('sum all and devide of quantity', () => {
    expect(average(0, 1, 2, 3, 4, 5, 6)).toBe(3);
});

test('string is not allowed', () => {
    expect(average('abc', 8, 10)).toBeFalsy();
});

test('string and NaN are not allowed', () => {
    expect(average(NaN, 'abc', 20)).toBeFalsy();
});

test('NaN is not allowed', () => {
    expect(average(10, NaN, 8)).toBe(false);
});

