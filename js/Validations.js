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

class Validation {

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
        if(symbol > -1) {
            return true;
        }
        return false;
    }


    isValidMonthName(month, lang) {
        const monthName = {
            lt: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            en: ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Geguze', 'Birzelis', 'Liepa', 'Rugpjutis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis'],
        }
        if (!monthName[lang].includes(month)) {
            console.error('ERROR: Month has to be with proper name');
            return false;
        }
        return true;
    }


    isValidWeekdayName(weekday, lang) {
        const weekdayName = {
            lt: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            en: ['Pirmadienis', 'Antradienis', 'Treciadienis', 'Ketvirtadienis', 'Penktadienis', 'Sestadienis', 'Sekmadienis'],
        }
        if (!weekdayName[lang].includes(weekday)) {
            console.error('ERROR: Weekday has to be with proper name');
            return false;
        }
        return true;
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


module.exports = Validation;