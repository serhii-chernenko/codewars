// https://www.codewars.com/kata/548db0bd1df5bbf29b0000b7

const monthsWith31Days = '(\\[(([0][13578])|([1][02]))-(([0][1-9]|[1-2][0-9])|([3][01]))])';
const monthsWith30Days = '(\\[([0][469]|[1][1])-(([0][1-9]|[1-2][0-9])|[3][0])])';
const monthFebruary = '(\\[([0][2])-(([0][1-9]|[1][0-9]|[2][0-8]))])';

const months = `(${monthsWith31Days}|${monthsWith30Days}|${monthFebruary})`;
const resultString = `^(.*)?${months}(.*)?$`;

const validDate = new RegExp(resultString);

console.log(validDate.test('[01-23]')); // "January 23rd is a valid date");
console.log(!validDate.test('[02-31]')); // "February 31st is an invalid date");
console.log(validDate.test('[02-16]')); // "valid");
console.log(!validDate.test('[ 6-03]')); // "invalid format");
console.log(validDate.test('ignored [08-11] ignored')); // "valid");
console.log(validDate.test('[3] [12-04] [09-tenth]')); // "December 4th is a valid date");

// Input: <pre style='display:inline;'>[02-29]</pre> should be invalid but was found valid.
