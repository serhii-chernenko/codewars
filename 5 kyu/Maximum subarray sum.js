// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

var maxSequence = function(arr){
    let currMax = 0;
    let { MIN_SAFE_INTEGER: resultMax } = Number;

    for (let index in arr) {
        currMax = Math.max(arr[index], arr[index] + currMax);

        if (currMax > resultMax) resultMax = currMax;
    }

    return Math.max(0, resultMax);
}

console.log(maxSequence([])); // 0
console.log(maxSequence([ -2, -1, -3, -4, -1, -2, -1, -5, -4 ])) // 0
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // 6