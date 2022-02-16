function permutations(string, result = []) {
    if (string.length === 1) return [string];

    for (let index = 0; index < string.length; index++) {
        const symbol = string[index];

        // check duplicated symbols
        if (string.indexOf(symbol) !== index) continue;

        const symbolsBeforeCurrentSymbol = string.substring(0, index);
        const symbolsAfterCurrentSymbol = string.substring(index + 1, string.length);

        for (const permutation of permutations(symbolsBeforeCurrentSymbol + symbolsAfterCurrentSymbol)) {
            result.push(symbol + permutation);
        }
    }

    return result;
}

permutations('a'); // ?
permutations('ab').sort(); // ?
permutations('aabb').sort(); // ?
