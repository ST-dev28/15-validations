function fullname(firstname, lastname) {
    if (firstname[0].toLowerCase() === firstname[0]) {
      return false;  
    } 
    if (lastname[0].toLowerCase() === lastname[0]) {
      return false;  
    }
return firstname + ' ' + lastname;
}

module.exports = fullname;