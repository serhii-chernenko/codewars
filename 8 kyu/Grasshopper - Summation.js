// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript

var summation = function (num) {
    let sum = 0;

    for (let index = 0; index <= num; index++) {
        sum += index;
    }

    return sum;
};

summation(1); /*?*/ // 1
summation(2); /*?*/ // 3
summation(8); /*?*/ // 36
