// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript

const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("One's and Zero's", () => {
    it('Example tests', () => {
        assert.strictEqual(binaryArrayToNumber([0, 0, 0, 1]), 1);
        assert.strictEqual(binaryArrayToNumber([0, 0, 1, 0]), 2);
        assert.strictEqual(binaryArrayToNumber([1, 1, 1, 1]), 15);
        assert.strictEqual(binaryArrayToNumber([0, 1, 1, 0]), 6);
    });
});
