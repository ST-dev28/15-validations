const average = require('./average');

test('sarasas is vieno skaiciaus', () => {
    expect(average([1])).toBe(1);
})

test('sarasas is triju skaiciu', () => {
    expect(average([1, 2, 3])).toBe(2);
})

test('sarasas is teigiamu ir neigiamu skaiciu', () => {
    expect(average([-1, 0, 1])).toBe(0);
})

test('vidurkis, kai neduota jokia reiksme', () => {
    expect(average()).toBe(false);
})

test('vidurkis, kai duotas ne array: string', () => {
    expect(average('adsf')).toBe(false);
})

test('vidurkis, kai duotas ne array: boolean', () => {
    expect(average(true)).toBe(false);
})

test('vidurkis, kai duotas ne array: boolean', () => {
    expect(average(false)).toBe(false);
})

test('vidurkis, kai duotas ne array: number', () => {
    expect(average(8)).toBe(false);
})

test('vidurkis, kai duotas ne array: null', () => {
    expect(average(null)).toBe(false);
})

test('vidurkis, kai duotas ne array: object', () => {
    expect(average({})).toBe(false);
})

test('vidurkis, kai duotas tuscias array', () => {
    expect(average([])).toBe(false);
})

test('vidurkis, kai ingoruojami array esantys: string', () => {
    expect(average([8, 'a', 6])).toBe(7);
})

test('vidurkis, kai ingoruojami array esantys: boolean', () => {
    expect(average([8, true, 6])).toBe(7);
})

test('vidurkis, kai ingoruojami array esantys: boolean', () => {
    expect(average([8, false, 6])).toBe(7);
})

test('vidurkis, kai ingoruojami array esantys: NaN', () => {
    expect(average([8, NaN, 6])).toBe(7);
})

test('vidurkis, kai ingoruojami array esantys: []', () => {
    expect(average([8, [], 6])).toBe(7);
})

test('vidurkis, kai ingoruojami array esantys: {}', () => {
    expect(average([8, {}, 6])).toBe(7);
})

test('vidurkis, kai ingoruojami array esantys: null', () => {
    expect(average([8, null, 6])).toBe(7);
})

test('vidurkis, kai ingoruojami array esantys: undefined', () => {
    expect(average([8, undefined, 6])).toBe(7);
})

test('vidurkis, kai ingoruojami array esantys: function', () => {
    expect(average([8, average, 6])).toBe(7);
})