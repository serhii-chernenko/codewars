// https://www.youtube.com/watch?v=yhuQaXkB1Sc&ab_channel=WebInterview

function getCompressedString(string) {
    let prevLetter = string.charAt(0).toLowerCase();
    let counter = 1;
    let result = '';

    for (let index = 1; index < string.length; index++) {
        const currentLetter = string[index].toLowerCase();

        const reset = function () {
            result += prevLetter + counter;
            prevLetter = currentLetter;
            counter = 1;
        };

        if (prevLetter === currentLetter) {
            counter++;

            if (index === string.length - 1) {
                reset();
            }
        } else {
            reset();
        }
    }

    return result;
}

function getCompressedStringSolution(string) {
    return string
        .toString()
        .toLowerCase()
        .match(/(\w)\1*/g)
        .reduce((acc, item) => acc + item[0] + item.length, '');
}

console.log(getCompressedString('aaAaBbDFFFff')); //a4b2d1f5
console.log(getCompressedStringSolution('aaAaBbDFFFff')); //a4b2d1f5
