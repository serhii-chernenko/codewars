// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

const uniqueInOrder = iterable => {
    const result = [];

    for (const symbol of iterable) {
        if (!result.length) {
            result.push(symbol);

            continue;
        } else if (symbol === result[result.length - 1]) {
            continue;
        }

        result.push(symbol);
    }

    return result;
};

uniqueInOrder('AAAABBBCCDAABBB'); /*?*/ // ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD'); /*?*/ // ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1, 2, 2, 3, 3]); /*?*/ // [1, 2, 3]
