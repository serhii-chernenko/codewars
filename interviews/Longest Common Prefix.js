// https://www.youtube.com/watch?v=yhuQaXkB1Sc&ab_channel=WebInterview

function longestCommonPrefix(words) {
    const checkLetter = (prefix, index) => {
        const letter = words[0].charAt(index);
        let counter = 1;

        for (let idx = 1; idx < words.length; idx++) {
            if (words[idx].charAt(index) === letter) {
                counter++;
            }
        }

        if (counter === words.length) {
            prefix += letter;

            if (index < words.length - 1) {
                return checkLetter(prefix, index + 1);
            }
        }

        return prefix;
    };

    return checkLetter('', 0);
}

console.log(longestCommonPrefix(['win', 'wine', 'wire'])); // wi
console.log(longestCommonPrefix(['hello', 'art', 'word'])); // ''
