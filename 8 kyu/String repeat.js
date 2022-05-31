// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

function repeatStr(n, s) {
    return s.repeat(n);
}

const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Tests', function () {
    it('Basic tests', function () {
        assert.strictEqual(repeatStr(3, '*'), '***');
        assert.strictEqual(repeatStr(5, '#'), '#####');
        assert.strictEqual(repeatStr(2, 'ha '), 'ha ha ');
    });
});
