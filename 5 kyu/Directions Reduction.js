// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

function dirReduc(arr, index = 0) {
    const opposites = {
        NORTH: 'SOUTH',
        SOUTH: 'NORTH',
        WEST: 'EAST',
        EAST: 'WEST'
    };

    if (arr.length < 2 || index + 1 > arr.length) {
        return arr;
    } else if (arr[index] === opposites[arr[index + 1]]) {
        arr.splice(index, 2);

        return dirReduc(arr, Math.min(0, index - 1));
    }

    return dirReduc(arr, index + 1);
}

const chai = require('chai');
chai.config.truncateThreshold = 0;
const deeepEqual = chai.assert.deepEqual;

function doTest(input, expected) {
    const log = `for ${JSON.stringify(input)}\n`;
    const actual = dirReduc(input);
    deeepEqual(actual, expected, log);
}

describe('Tests', () => {
    it('test', () => {
        doTest(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'], ['WEST']);
        doTest(['NORTH', 'WEST', 'SOUTH', 'EAST'], ['NORTH', 'WEST', 'SOUTH', 'EAST']);
        doTest(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST'], []);
    });
});
