// https://www.youtube.com/watch?v=yhuQaXkB1Sc&ab_channel=WebInterview

function invert(obj) {
    const resultObj = {};
    const keysArr = Object.keys(obj);

    for (let index = 0; index < keysArr.length; index++) {
        resultObj[obj[keysArr[index]]] = keysArr[index];
    }

    return resultObj;
}

console.log(invert({ a: 1, b: 2, c: 3 })); // { 1: 'a', 2: 'b', 3: 'c' }
console.log(invert({ a: 1, b: 2, c: 1 })); // { 1: 'c', 2: 'b' }
