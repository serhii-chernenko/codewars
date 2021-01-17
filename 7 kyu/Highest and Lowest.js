// https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(numbers){
    let newArr = numbers.split(/\s/g).map(number => (number = parseFloat(number)));
    return `${Math.max.apply(0, newArr)} ${Math.min.apply(0, newArr)}`
}

console.log(highAndLow("1 2 3 4 5"))   // return "5 1"
console.log(highAndLow("1 2 -3 4 5"))  // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")) // return "9 -5"