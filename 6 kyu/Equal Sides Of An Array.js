// https://www.codewars.com/kata/5679aa472b8f57fb8c000047

function findEvenIndex(arr) {
    let result = arr.length === 1 ? 0 : -1;

    if (arr.length > 1) {
        for (let index = 0; index < arr.length; index++) {
            let beforeSum = 0,
                afterSum = 0;

            if (index > 0) {
                for (let beforeIndex = 0; beforeIndex < index; beforeIndex++) {
                    beforeSum = beforeSum + arr[beforeIndex];
                }
            }

            if (index < arr.length - 1) {
                for (let afterIndex = index + 1; afterIndex < arr.length; afterIndex++) {
                    afterSum = afterSum + arr[afterIndex];
                }
            }

            if (beforeSum === afterSum) result = index;
        }
    }

    return result;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]));
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));