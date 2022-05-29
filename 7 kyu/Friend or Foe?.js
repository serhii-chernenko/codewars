// https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript

function friend(friends) {
    return friends.filter(friend => friend.length === 4);
}

const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Basic tests', () => {
    it('Testing for fixed tests', () => {
        assert.deepEqual(friend(['Ryan', 'Kieran', 'Mark']), ['Ryan', 'Mark']);
        assert.deepEqual(friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man']), ['Ryan']);
        assert.deepEqual(friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool']), [
            'Jimm',
            'Cari',
            'aret'
        ]);
        assert.deepEqual(friend(['Love', 'Your', 'Face', '1']), ['Love', 'Your', 'Face']);
    });
});
