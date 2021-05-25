function fullname(firstname, lastname) {
    if (firstname === '' || lastname === '') {
        return false;
    }
    if (firstname === firstname.toLowerCase() ||
        lastname === lastname.toLowerCase()) {
        return false;
    }
    if (firstname.includes(' ') ||
        lastname.includes(' ')) {
        return false;
    }


    return firstname + ' ' + lastname;
}

module.exports = fullname;