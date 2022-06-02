// https://www.codewars.com/kata/551b4501ac0447318f0009cd/train/javascript

function booleanToString(b) {
    return `${b}`;
}

const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Tests', () => {
    it('test', () => {
        assert.strictEqual(booleanToString(true), 'true', 'When we pass in true, we want the string "true" as output');
        assert.strictEqual(
            booleanToString(false),
            'false',
            'When we pass in false, we want the string "false" as output'
        );
    });
});
