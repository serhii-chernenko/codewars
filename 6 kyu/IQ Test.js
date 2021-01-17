// https://www.codewars.com/kata/552c028c030765286c00007d

function iqTest(numbers){
    const newArr = numbers.split(/\s/g);
    const even = [];
    const odd = [];

    for (let index = 0; index < newArr.length; index++) {
        let result = index + 1;

        if (parseFloat(newArr[index]) % 2) {
            even.push(result);
        } else {
            odd.push(result);
        }
    }

    return even.length === 1 ? even[0] : odd[0];
}

console.log(iqTest("2 4 7 8 10")) // 3
console.log(iqTest("1 2 1 1")) // 2