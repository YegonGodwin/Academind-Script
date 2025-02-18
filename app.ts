function total(n1:number, n2:number){
    if(typeof n1 !== 'number' || typeof n2 !== 'number'){
        throw new Error('Incorect input!');
    }
    return n1 + n2;
}
const number3 = 15;
const number4 = 20;
const back = total(number3, number4);
console.log(back);