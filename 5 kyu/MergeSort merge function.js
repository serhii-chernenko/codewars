// https://www.codewars.com/kata/52336a4436e0b095d8000093/train/javascript

function mergesorted(a, b) {
    const result = [];

    while (a.length && b.length) {
        result.push(a[0] < b[0] ? a.shift() : b.shift());
    }

    return [...result, ...a, ...b];
}

mergesorted([1, 2], [3, 4]); // should: [1,2,3,4]
mergesorted([1, 2], [3]); // should: [1,2,3]
mergesorted([1], [2, 3]); // should: [1,2,3]
