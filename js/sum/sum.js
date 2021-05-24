function sum(a, b) {
    if (typeof a !== 'number' ||
        typeof b !== 'number' ||
        isNaN(a) ||
        isNaN(b)) {
        return false;
    }

    if (a > b) {
        return a + b;
    }
    return b + a;
}



module.exports = sum;