const fullname = require('./fullname');

test('correct fullname', () => {
    expect(fullname('Vardenis', 'Pavardenis')).toBe('Vardenis Pavardenis');
});

test('error without firstname', () => {
    expect(fullname('', 'Pavardenis')).toBe(false);
});

test('error without lastname', () => {
    expect(fullname('Vardenis', '')).toBe(false);
});

test('error with firstname and spaces around', () => {
    expect(fullname(' Vardenis ', 'Pavardenis')).toBe(false);
    expect(fullname(' Vardenis', 'Pavardenis')).toBe(false);
    expect(fullname('Vardenis ', 'Pavardenis')).toBe(false);
    expect(fullname('Vardenis     ', 'Pavardenis')).toBe(false);
});

test('error with lastname and spaces around', () => {
    expect(fullname('Vardenis', ' Pavardenis ')).toBe(false);
    expect(fullname('Vardenis', ' Pavardenis')).toBe(false);
    expect(fullname('Vardenis', 'Pavardenis ')).toBe(false);
    expect(fullname('Vardenis', '     Pavardenis')).toBe(false);
});

test('error as firstname must start in capital letter', () => {
    expect(fullname('vardenis', 'Pavardenis')).toBe(false);
});

test('error as lastname must start in capital letter', () => {
    expect(fullname('Vardenis', 'pavardenis')).toBe(false);
});



