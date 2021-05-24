function fullname(firstname, lastname) {
    if (firstname === firstname.toLowerCase() ||
        lastname === lastname.toLowerCase()) {
        return false;  
    } 
    if (firstname.includes(' ') ||
        lastname.includes(' ')) {
        return false;
    }
    if (typeof firstname === '' || typeof lastname === '') {
        return false;
    }

return firstname + ' ' + lastname;
}

module.exports = fullname;