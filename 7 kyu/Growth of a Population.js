// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

function nbYear(p0, percent, aug, p) {
    let years = 0;

    const sum = (p0, percent, aug, p) => {
        const result = Math.floor(p0 + p0 * (percent / 100)) + aug;

        years++;

        return result >= p ? years : sum(result, percent, aug, p);
    };

    return sum(p0, percent, aug, p);
}

const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('nbYear', function () {
    it('Basic tests', function () {
        assert.strictEqual(nbYear(1500, 5, 100, 5000), 15);
        assert.strictEqual(nbYear(1500000, 2.5, 10000, 2000000), 10);
        assert.strictEqual(nbYear(1500000, 0.25, 1000, 2000000), 94);
        assert.strictEqual(nbYear(1000, 2, 50, 1214), 4);
    });
});
