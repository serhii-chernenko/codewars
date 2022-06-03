// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

function reverseWords(str) {
    return str
        .split(/\s+/)
        .map(item => item.split('').reverse().join(''))
        .join(str.match(/\s+/));
}

const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Basic tests', () => {
    it('Testing for fixed tests', () => {
        assert.strictEqual(
            reverseWords('The quick brown fox jumps over the lazy dog.'),
            'ehT kciuq nworb xof spmuj revo eht yzal .god'
        );
        assert.strictEqual(reverseWords('apple'), 'elppa');
        assert.strictEqual(reverseWords('a b c d'), 'a b c d');
        assert.strictEqual(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
    });
});
