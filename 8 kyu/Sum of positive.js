// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

function positiveSum(arr) {
    let sum = 0;

    if (!arr.length) return sum;

    for (const num of arr) {
        if (Math.sign(num) === 1) sum += num;
    }

    return sum;
}

positiveSum([1, 2, 3, 4, 5]); // ?
positiveSum([1, -2, 3, 4, 5]); // ?
positiveSum([]); // ?
