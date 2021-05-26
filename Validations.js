/*
VALIDACIJOS
ar validus:
- email
- firstname
- lastname
- message
- phone number
- month name
- weekday name
- person ID (asmens kodas)  lyymmdd123x

naudojame: OOP
kiek imanoma optimizuoti - pasistengti nerasyti tu paciu validaciju 
skirtingose vietose
*/

class Validations {

    isValidEmail(email) {
        const recheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return recheck.test(String(email).toLowerCase());

        return true;
    }


    isValidFirstName(firstName) {           // galimas isplestinis tikrinimas kaip lastName
        if (!this.isValidMessage(firstName)) {
            return false;
        }
        return true;
    }

    isValidLastName(lastName) {
        if (!this.isValidMessage(lastName)) {
            return false;
        }
        if (lastName.length < 2) {
            return false;
        }
        if (lastName[0].toLowerCase() === lastName[0]) {
            return false;
        }
        if (lastName.slice(1).toLowerCase() !== lastName.slice(1)) {
            return false;
        }
        return true;
    }


    isValidMessage(message) {
        if (typeof message !== 'string' || message === '') {
            console.error('ERROR: Message has to be a text');
            return false;
        }
        return true;
    }


    isValidPhoneNum(phoneNum) {
        const symbol = phoneNum.search(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/);
        //const symbol = /^\d{10}$/;
        //if((phoneNum.value.match(symbol))
        if (symbol > -1) {
            return true;
        }
        return false;
    }


    isValidMonthName(month, lang) {
        const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Geguze', 'Birzelis', 'Liepa', 'Rugpjutis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis']
        for (let i = 0; i < monthName.length; i++) {
            if (month === monthName[i]) return true;
            if (month === monthName[i].toLowerCase()) return true;
            if (month !== monthName[i].toUpperCase()) return true;
        }
        console.error('ERROR: Month has to be with proper name');
        return false;
    }


    isValidWeekdayName(weekday, lang) {
        //const weekdayName = {
        // lt: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        // en: ['Pirmadienis', 'Antradienis', 'Treciadienis', 'Ketvirtadienis', 'Penktadienis', 'Sestadienis', 'Sekmadienis'],

        let weekName = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Pirmadienis', 'Antradienis', 'Treciadienis', 'Ketvirtadienis', 'Penktadienis', 'Sestadienis', 'Sekmadienis'];
        for (let j = 0; j < weekName.length; j++) {
            if (weekday === weekName[j].toLowerCase()) return true;
            if (weekday !== weekName[j].toUpperCase()) return true;
        }
        console.error('ERROR: Day has to be with proper name');
        return false;
    }


    isValidPersinalId(personalId) {
        // ar sudetis yra skaiciai
        // ar ilgis === 11
        // ar pirmas skaicius < 3 arba > 6 -> true
        if (isNaN(personalId)) return false;
        if (personalId.length !== 11) return false;
        if (personalId[0] < 3 || personalId[0] > 6) return false;

        return true;
    }
}


module.exports = Validations;