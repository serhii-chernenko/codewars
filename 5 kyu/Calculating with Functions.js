// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

function mathEval(num, operation) {
    return operation ? operation(num) : num;
}

function zero(operation) {
    return mathEval(0, operation);
}

function one(operation) {
    return mathEval(1, operation);
}

function two(operation) {
    return mathEval(2, operation);
}

function three(operation) {
    return mathEval(3, operation);
}

function four(operation) {
    return mathEval(4, operation);
}

function five(operation) {
    return mathEval(5, operation);
}

function six(operation) {
    return mathEval(6, operation);
}

function seven(operation) {
    return mathEval(7, operation);
}

function eight(operation) {
    return mathEval(8, operation);
}

function nine(operation) {
    return mathEval(9, operation);
}

function plus(numArg) {
    return numParent => Math.floor(numParent + numArg);
}

function minus(numArg) {
    return numParent => Math.floor(numParent - numArg);
}

function times(numArg) {
    return numParent => Math.floor(numParent * numArg);
}

function dividedBy(numArg) {
    return numParent => Math.floor(numParent / numArg);
}

console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3