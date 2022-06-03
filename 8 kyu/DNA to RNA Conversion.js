// https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U');
}

const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Basic tests', () => {
    it('Testing for fixed tests', () => {
        assert.strictEqual(DNAtoRNA('TTTT'), 'UUUU');
        assert.strictEqual(DNAtoRNA('GCAT'), 'GCAU');
        assert.strictEqual(DNAtoRNA('GACCGCCGCC'), 'GACCGCCGCC');
    });
});
