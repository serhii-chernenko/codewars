// https://www.codewars.com/kata/5a262cfb8f27f217f700000b

function solve(a,b){
    let firstArr = a.split('');
    let secondArr = b.split('');
    let resultArr = [];

    for (let letter of firstArr) {
        if (!secondArr.includes(letter)) resultArr.push(letter);
    }

    for (let letter of secondArr) {
        if (!firstArr.includes(letter)) resultArr.push(letter);
    }

    return resultArr.join('');
};

console.log(solve("xyab","xzca")) // "ybzc"