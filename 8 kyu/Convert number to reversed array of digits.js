// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

function digitize(n) {
    return n
        .toString()
        .split('')
        .reverse()
        .map(num => parseInt(num));
}

const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Basic tests', () => {
    it('Testing for fixed tests', () => {
        assert.deepEqual(digitize(35231), [1, 3, 2, 5, 3]);
        assert.deepEqual(digitize(0), [0]);
    });
});
