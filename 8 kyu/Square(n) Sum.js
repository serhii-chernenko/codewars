// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

function squareSum(numbers) {
    return numbers.reduce((result, num) => (result = result + num ** 2), 0);
}

squareSum([1, 2]); /*?*/ // 5
squareSum([0, 3, 4, 5]); /*?*/ // 50
squareSum([]); /*?*/ // 0
