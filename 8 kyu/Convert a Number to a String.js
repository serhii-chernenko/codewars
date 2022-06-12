// https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/javascript

function numberToString(num) {
    return num.toString();
}

const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Tests', () => {
    it('test', () => {
        assert.strictEqual(numberToString(67), '67');
    });
});
