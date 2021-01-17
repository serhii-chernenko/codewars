// https://www.codewars.com/kata/54a91a4883a7de5d7800009c

function stringIncrementer(string) {
    const { index: numIndex } = string.match(/\d*$/);
    const letters = string.substr(0, numIndex);
    const nums = string.substr(numIndex) || '0';
    const incrementedNums = `${parseFloat(nums) + 1}`;
    let resultNumsString = incrementedNums;

    for (let index = 0; index < nums.length - incrementedNums.length; index++) {
        resultNumsString = '0' + resultNumsString;
    }

    return letters + resultNumsString;
}


console.log(stringIncrementer("foobar000"), "foobar001");
console.log(stringIncrementer("foo"), "foo1");
console.log(stringIncrementer("foobar001"), "foobar002");
console.log(stringIncrementer("foobar99"), "foobar100");
console.log(stringIncrementer("foobar099"), "foobar100");
console.log(stringIncrementer(""), "1");
