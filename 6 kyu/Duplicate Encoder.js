// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

function duplicateEncode(word) {
    const DEFAULT_BRACE = '(';
    const REVERTED_BRACE = ')';
    const memo = {};
    const arr = word.toLowerCase().split('');

    for (const [index, char] of arr.entries()) {
        if (!(char in memo)) {
            memo[char] = index;
            arr[index] = DEFAULT_BRACE;

            continue;
        }

        arr[memo[char]] = REVERTED_BRACE;
        arr[index] = REVERTED_BRACE;
        memo[char] = index;
    }

    return arr.join('');
}

const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Duplicate Encoder', () => {
    it('Testing for fixed tests', () => {
        assert.strictEqual(duplicateEncode('din'), '(((');
        assert.strictEqual(duplicateEncode('recede'), '()()()');
        assert.strictEqual(duplicateEncode('Success'), ')())())', 'should ignore case');
        assert.strictEqual(duplicateEncode('(( @'), '))((');
    });
});
