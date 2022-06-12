// https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript

function tribonacci(signature, n) {
    if (signature.length > n) {
        signature.length = n;

        return signature;
    }

    const reduce = index => {
        if (signature.length === n) return signature;

        let sum = 0;

        for (let i = index; i < index + 3; i++) {
            sum += signature[i];
        }

        signature.push(sum);

        return reduce(index + 1);
    };

    return reduce(0);
}

tribonacci([1, 1, 1], 10); /*?*/ // [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]
tribonacci([0, 0, 1], 10); /*?*/ // [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]
tribonacci([1, 1, 1], 1); /*?*/ // [1]
