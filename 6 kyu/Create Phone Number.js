// https://www.codewars.com/kata/525f50e3b73515a6db000b83

function createPhoneNumber(numbers){
    const newArr = ['(', ...numbers];

    newArr.splice(4, 0, ') ');
    newArr.splice(8, 0, '-');

    return newArr.join('');
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // "(123) 456-7890"