// https://www.codewars.com/kata/537e18b6147aa838f600001b/train/javascript

function justify(text, width, result = []) {
    const words = text.split(' ');

    while (words.length) {
        const lineWords = [];

        while (words.length > 0 && `${lineWords},${words[0]}`.length <= width) {
            lineWords.push(words.shift());
        }

        if (words.length) {
            const spaces = width - `${lineWords}`.length;

            for (let index = 0; index < spaces; index++) {
                lineWords[index % (lineWords.length - 1)] += ' ';
            }
        }

        result.push(lineWords.join(' '));
    }

    return result.join('\n');
}

// '123  45\n6'
justify('123 45 6', 7); // ?
