// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript

function invert(array) {
    return array.map(item => item * -1);
}

const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Invert array values', () => {
    it('Basic Tests', () => {
        assert.deepEqual(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
        assert.deepEqual(invert([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
        assert.deepEqual(invert([]), []);
        assert.deepEqual(invert([0]), [-0]);
    });
});
