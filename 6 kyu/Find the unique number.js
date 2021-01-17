// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(arr) {
    const values = {};

    arr.map((item, index) => {
        values[item] = Math.floor(values[item] || 0) + 1;
    });

    return parseFloat(Object.keys(values).filter(key => values[key] === 1)[0]);
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2)
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55)