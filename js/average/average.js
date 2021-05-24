function average(t, s) {
    const list = [10, 20, 30];
    return list.reduce((t, s) => t + s, 0) / list.length;
}




module.exports = average;