// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

function persistence(num) {
    let counter = 0;

    const split = str => {
        if (str.length === 1) return counter;

        const arr = [...str];
        let sum = arr[0];

        for (let index = 1; index < str.length; index++) {
            sum = sum * arr[index];
        }

        counter++;

        return split(sum.toString());
    };

    return split(num.toString());
}

const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Persistent Bugger.', () => {
    it('Fixed tests', () => {
        assert.strictEqual(persistence(39), 3);
        assert.strictEqual(persistence(4), 0);
        assert.strictEqual(persistence(25), 2);
        assert.strictEqual(persistence(999), 4);
    });
});
