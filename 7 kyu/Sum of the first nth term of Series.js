// https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript

function SeriesSum(n) {
    let sum = 0;

    for (let index = 0; index < n; index++) {
        sum += 1 / (index * 3 + 1);
    }
    return sum.toFixed(2);
}

const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Tests', () => {
    it('test', () => {
        assert.strictEqual(SeriesSum(0), '0.00');
        assert.strictEqual(SeriesSum(1), '1.00');
        assert.strictEqual(SeriesSum(2), '1.25');
        assert.strictEqual(SeriesSum(3), '1.39');
        assert.strictEqual(SeriesSum(4), '1.49');
        assert.strictEqual(SeriesSum(5), '1.57');
    });
});
