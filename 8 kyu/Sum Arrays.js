// https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript

// Sum Numbers
function sum(numbers) {
    'use strict';

    return numbers.reduce((acc, current) => (acc += current), 0);
}

const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Tests', () => {
    it('test', () => {
        assert.strictEqual(sum([]), 0);
        assert.strictEqual(sum([1, 5.2, 4, 0, -1]), 9.2);
    });
});
