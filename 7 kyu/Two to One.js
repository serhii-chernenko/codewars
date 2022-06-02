// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

function longest(s1, s2) {
    return [...new Set(s1.concat(s2).split('').sort())].join('');
}

const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('longest', function () {
    it('Basic tests', function () {
        assert.strictEqual(longest('aretheyhere', 'yestheyarehere'), 'aehrsty');
        assert.strictEqual(longest('loopingisfunbutdangerous', 'lessdangerousthancoding'), 'abcdefghilnoprstu');
        assert.strictEqual(longest('inmanylanguages', 'theresapairoffunctions'), 'acefghilmnoprstuy');
    });
});
