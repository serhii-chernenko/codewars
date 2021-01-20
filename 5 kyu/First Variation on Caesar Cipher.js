// https://www.codewars.com/kata/5508249a98b3234f420000fb

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphabetUpperCased = alphabet;
const alphabetLowered = alphabet.toLowerCase();

function movingShift(s, shift) {
    const resultArray = [];
    let counter = shift;

    const resultString = s.split('').map(letter => {
        let changedLetter = letter;

        if (letter.match(/[a-z]/)) {
            const index = alphabetLowered.indexOf(letter);

            changedLetter = alphabetLowered[(index + counter) % alphabet.length];
        }

        if (letter.match(/[A-Z]/)) {
            const index = alphabetUpperCased.indexOf(letter);

            changedLetter = alphabetUpperCased[(index + counter) % alphabet.length];
        }

        counter = ++shift;

        return changedLetter;
    }).join('');

    const dividedResultString = Math.ceil(resultString.length / 5);
    let prevSymbolIndex = 0;

    for (let index = 0; index < 5; index++) {
        const substr = resultString.substr(prevSymbolIndex, dividedResultString);

        resultArray.push(substr ? substr : '');
        prevSymbolIndex += dividedResultString;
    }

    return resultArray;
}

function demovingShift(arr, shift) {
    let counter = shift;

    return arr.join('').split('').map(letter => {
        let changedLetter = letter;

        if (letter.match(/[a-z]/)) {
            const index = alphabetLowered.indexOf(letter);
            const calcIndex = index - counter >= 0 ? index - counter : index - counter + alphabet.length;

            changedLetter = alphabetLowered[calcIndex];
        }

        if (letter.match(/[A-Z]/)) {
            const index = alphabetUpperCased.indexOf(letter);
            const calcIndex = index - counter >= 0 ? index - counter : index - counter + alphabet.length;

            changedLetter = alphabetUpperCased[calcIndex];
        }

        counter = ++shift % alphabet.length;

        return changedLetter;
    }).join('');
}

console.log(movingShift('I should have known that you would have a perfect answer for me!!!', 1));
console.log(demovingShift(["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"], 1))
