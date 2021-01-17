// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

function duplicateCount(text){
    const splitArr = text.toLowerCase().split('');
    const eachLetter = [];
    const repeatedLetter = [];

    if (!splitArr.length) return 0;

    splitArr.map(letter => {
        if (!eachLetter.length) return eachLetter.push(letter);

        if (eachLetter.includes(letter) && !repeatedLetter.includes(letter)) {
            repeatedLetter.push(letter);
        }

        return eachLetter.push(letter);
    });

    return repeatedLetter.length;
}

console.log(duplicateCount('abcde')); // 0
console.log(duplicateCount('aabbcde')); // 2
console.log(duplicateCount('aabBcde')); // 2
console.log(duplicateCount('indivisibility')); // 1
console.log(duplicateCount('Indivisibilities')); // 2
console.log(duplicateCount('aA11')); // 2
console.log(duplicateCount('ABBA')); // 2