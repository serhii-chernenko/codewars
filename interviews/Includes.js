const includes = (arr, num) => new Set(arr).has(num);

console.log(includes([1, 3, 8, 10], 8)); // true
console.log(includes([1, 3, 8, 8, 15], 15)); // true
console.log(includes([1, 3, 8, 10, 15], 9)); // false
