// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

function isPangram(string) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const arr = string.toLowerCase().split('');

    for (const letter of alphabet) {
        if (!arr.includes(letter)) return false;
    }

    return true;
}

const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Tests', () => {
    it('test1', () => {
        var string = 'The quick brown fox jumps over the lazy dog.';
        assert.strictEqual(isPangram(string), true);
    });
    it('test2', () => {
        var string = 'This is not a pangram.';
        assert.strictEqual(isPangram(string), false);
    });
});
