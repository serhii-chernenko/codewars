// https://www.codewars.com/kata/539a0e4d85e3425cb0000a88

function add(n){
    let sum = 0;

    const sumFn = num => {
        sum = sum + num;

        return sumFn;
    }

    sumFn.valueOf = () => sum;

    return sumFn(n);
}

console.log(add(1)(2)(3) == 6)
console.log(add(1)(2)(3)(4) == 10); // 10
console.log(add(1)(2)(3)(4)(5) == 15); // 15