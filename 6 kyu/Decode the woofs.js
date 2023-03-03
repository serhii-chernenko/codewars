function woofDecoder(str) {
    const trimWrongCharacters = str.toLowerCase().replace(new RegExp('[^wfo!\\-]', 'g'), '');
    const rightSymbols = new RegExp('(?=.*w)(?=.*f)(?=.*o).*', 'g');
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    if (!trimWrongCharacters.match(rightSymbols)?.length) {
        return 'nothing to decode!';
    }

    const woofs = trimWrongCharacters.split('!').filter(item => !!item);
    let result = '';

    for (const woof of woofs) {
        const repeats = woof.split('-');

        if (repeats.length > alphabet.length) {
            return 'just barking!';
        }

        for (const [index, possibleWoof] of repeats.entries()) {
            if (possibleWoof.match(rightSymbols).length) {
                continue;
            }

            repeats.splice(index, 1);
        }

        result += alphabet.charAt(repeats.length - 1);
    }

    return result;
}

const test = 'Woof! Woof' + '-woof'.repeat(26) + '!';
const result = woofDecoder(test);
console.log(result);
