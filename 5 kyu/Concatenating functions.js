// https://www.codewars.com/kata/527176c487961e5900000106/train/javascript

Function.prototype.pipe = function (fn) {
    return num => fn(this(num));
};

// just a small amount of possible functions to start testing with.
var addOne = function (e) {
    return e + 1;
};

var square = function (e) {
    return e * e;
};

var result = [1, 2, 3, 4, 5].map(addOne.pipe(square));

console.log(result); // [4, 9, 16, 25, 36]
