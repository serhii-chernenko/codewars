// https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript

function printerError(s) {
    const matches = s.match(/[^a-m]/g) || [];

    return `${matches.length}/${s.length}`;
}

const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('printerError', function () {
    it('Basic tests', function () {
        assert.strictEqual(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'), '3/56');
        assert.strictEqual(printerError('aaabbbbhaijjjm'), '0/14');
        assert.strictEqual(printerError('aaaxbbbbyyhwawiwjjjwwm'), '8/22');
    });
});
