const validationsOption = require('./validationsOption');

const v = new validationsOption();

test('neduotas vardas', () => {
    expect(v.isValidFirstName()).toBe(false);
})

test('vardas netinkamo tipo', () => {
    expect(v.isValidFirstName(156)).toBe(false);
})

test('vardas netinkamo tipo', () => {
    expect(v.isValidFirstName(true)).toBe(false);
})

test('vardas netinkamo tipo', () => {
    expect(v.isValidFirstName([])).toBe(false);
})

test('vardas netinkamo tipo', () => {
    expect(v.isValidFirstName(null)).toBe(false);
})

test('vardas negali buti tuscias tekstas', () => {
    expect(v.isValidFirstName('')).toBe(false);
})

test('vardas negali buti maziau nei 2 simboliai', () => {
    expect(v.isValidFirstName('V')).toBe(false);
})

test('vardas turi buti is didziosios raides', () => {
    expect(v.isValidFirstName('vardenis')).toBe(false);
})

// test('vardas turi prasideti didziaja raide ir ji turi buti tik pirma', () => {
//     expect(v.isValidFirstName('VarDenis')).toBe(false);
// })

test('neduota pavarde', () => {
    expect(v.isValidLastName()).toBe(false);
})

test('pavarde netinkamo tipo', () => {
    expect(v.isValidLastName(156)).toBe(false);
})

test('pavarde netinkamo tipo', () => {
    expect(v.isValidLastName(true)).toBe(false);
})

test('pavarde netinkamo tipo', () => {
    expect(v.isValidLastName([])).toBe(false);
})

test('pavarde netinkamo tipo', () => {
    expect(v.isValidLastName(null)).toBe(false);
})

test('pavarde negali buti tuscias tekstas', () => {
    expect(v.isValidLastName('')).toBe(false);
})

test('pavarde negali buti maziau nei 2 simboliai', () => {
    expect(v.isValidLastName('P')).toBe(false);
})

test('pavarde turi buti is didziosios raides', () => {
    expect(v.isValidLastName('pavardenis')).toBe(false);
})

// test('pavarde turi prasideti didziaja raide ir ji turi buti tik pirma', () => {
//     expect(v.isValidLastName('PavarDenis')).toBe(false);
// })

test('neduotas email', () => {
    expect(v.isValidEmail()).toBe(false);
})

test('email netinkamo tipo', () => {
    expect(v.isValidEmail(156)).toBe(false);
})

test('geras email', () => {
    expect(v.isValidEmail('vardenis@mail.xyz')).toBe(true);
})

test('trumpiausias geras email', () => {
    expect(v.isValidEmail('a@b.lt')).toBe(true);
})

test('per trumpas email', () => {
    expect(v.isValidEmail('a@b.l')).toBe(false);
})

test('email turi tureti @ simboli', () => {
    expect(v.isValidEmail('abc.lt')).toBe(false);
})

test('@ negali buti pirmas simbolis', () => {
    expect(v.isValidEmail('@ab.lt')).toBe(false);
})

test('@ negali buti tarp paskutiniu keturiu simboliu', () => {
    expect(v.isValidEmail('ab@.lt')).toBe(false);
})

test('@ negali buti tarp paskutiniu keturiu simboliu', () => {
    expect(v.isValidEmail('a@dfsadg@b.lt')).toBe(false);
})

test('neduotas message', () => {
    expect(v.isValidMessage()).toBe(false);
})

test('message netinkamo tipo', () => {
    expect(v.isValidMessage(156)).toBe(false);
})

test('message negali buti tuscias tekstas', () => {
    expect(v.isValidMessage('')).toBe(false);
})

test('message geras', () => {
    expect(v.isValidMessage('a')).toBe(true);
})
