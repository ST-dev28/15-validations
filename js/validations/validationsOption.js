class validationsOption {

    isValidFirstName(firstName) {
        if (firstName === undefined ||
            typeof firstName !== 'string' ||
            firstName.length < 2 ||
            !this.isUpperCase(firstName[0])) {
            return false;
        }
        return true;
    }

    isValidLastName(lastName) {
        if (lastName === undefined ||
            typeof lastName !== 'string' ||
            lastName.length < 2 ||
            !this.isUpperCase(lastName[0])) {
            return false;
        }
        return true;
    }

    isValidEmail(email) {
        if (typeof email !== 'string' ||
            email.length < 6 ||
            email.indexOf('@') === -1 ||
            email[0] === '@' ||
            email.slice(-4).indexOf('@') > -1 ||
            this.countSimbols(email, '@') > 1) {
            return false;
        }
        return true;
    }

    isValidMessage(msg) {
        if (typeof msg !== 'string' ||
            msg === '') {
            return false;
        }
        return true;
    }

    isValidPhoneNumber() {
        return true;
    }

    isValidMonthName() {
        return true;
    }

    isValidWeekdayName() {
        return true;
    }

    isValidPersonID() {
        return true;
    }

    isUpperCase(letter) {
        // if (letter === letter.toUpperCase()) {
        //     return true;
        // } else {
        //     return false;
        // }

        return letter === letter.toUpperCase();
    }

    countSimbols(text, letter) {
        let count = 0;

        for (const t of text) {
            if (t === letter) {
                count++;
            }
        }

        return count;
    }
}

module.exports = validationsOption;