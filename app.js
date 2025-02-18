function total(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Incorect input!');
    }
    return n1 + n2;
}
var number3 = 15;
var number4 = 20;
var back = total(number3, number4);
console.log(back);
