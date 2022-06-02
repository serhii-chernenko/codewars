// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

function countSmileys(arr) {
    return arr.filter(item => /^(:|;)(-|~)?(\)|D)$/.test(item)).length;
}

const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Basic testing', function () {
    it('', () => {
        assert.strictEqual(countSmileys([]), 0);
        assert.strictEqual(countSmileys([':D', ':~)', ';~D', ':)']), 4);
        assert.strictEqual(countSmileys([':)', ':(', ':D', ':O', ':;']), 2);
        assert.strictEqual(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
    });
});
