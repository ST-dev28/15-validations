const sum = require('./sum');

test('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
});

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 0.5 + 0.5 to equal 1', () => {
    expect(sum(0.5, 0.5)).toBeCloseTo(1, 5);
});

test('adds 0.1 + 0.2 to equal 0.3', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3, 5);
});
