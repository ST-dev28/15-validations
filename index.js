const Validation = require('./js/Validations');
const v = new Validation();


//console.log(v.isValidEmail('demof@gmail.com'), true);

//console.log(v.isValidFirstName('Vadenis'), true);
//console.log(v.isValidFirstName(123456), false);
//console.log(v.isValidFirstName(['Vadenis']), false);
//console.log(v.isValidFirstName(''), false);
//console.log(v.isValidLastName('Pavardenis'), true);
//console.log(v.isValidLastName('P'), false);
//console.log(v.isValidLastName('pavardenis'), false);
//console.log(v.isValidLastName('PaVarDenis'), false);
//console.log(v.isValidLastName('Pavardenis1'), false);
//console.log(v.isValidLastName('Pava rdenis'), false);


//console.log(v.isValidMessage('Some message'), true);
//console.log(v.isValidMessage(12345), false);
//console.log(v.isValidMessage('12345'), true);
//console.log(v.isValidMessage(true), false);
//console.log(v.isValidMessage(false), false);
//console.log(v.isValidMessage(''), false);
//console.log(v.isValidMessage('sdfsd'), true);
//console.log(v.isValidMessage([]), false);
//console.log(v.isValidMessage([1221, 235]), false);
//console.log(v.isValidMessage('%$^%$^'), true);
//console.log(v.isValidMessage(['bla, bla']), false);

//console.log(v.isValidPhoneNum('+37061234567'), true);

//console.log(v.isValidMonthName('January'), true);
//console.log(v.isValidMonthName('Sausis'), true);
//console.log(v.isValidWeekdayName('Saturday'), true);
//console.log(v.isValidWeekdayName('Sestadienis'), true);

console.log(v.isValidPersinalId('49912010001'), true);
console.log(v.isValidPersinalId('39912010001'), true);
console.log(v.isValidPersinalId('4991201nnnn'), false);
console.log(v.isValidPersinalId('29912010001'), false);
console.log(v.isValidPersinalId('4991201000'), false);
console.log(v.isValidPersinalId('asdfghjklmn'), false);
