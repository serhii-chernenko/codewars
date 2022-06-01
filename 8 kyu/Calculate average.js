// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

function find_average(array) {
    let sum = 0;

    if (!array.length) return sum;

    for (const num of array) {
        sum += num;
    }

    return sum / array.length;
}

const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Basic tests', () => {
    it('Testing for fixed tests', () => {
        assert.strictEqual(find_average([1, 1, 1]), 1);
        assert.strictEqual(find_average([1, 2, 3]), 2);
        assert.strictEqual(find_average([1, 2, 3, 4]), 2.5);
    });
});
