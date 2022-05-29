// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

function countPositivesSumNegatives(input) {
    if (!input || !input.length) return [];

    const countPositives = input.filter(item => item > 0).length;
    const negatives = input.filter(item => item < 0);
    const sumNegatives = negatives.reduce((acc, current) => (acc += current), 0);

    return [countPositives, sumNegatives];
}

const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Example tests', () => {
    it('Testing for fixed test 1', () => {
        let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
        let actual = countPositivesSumNegatives(testData);
        let expected = [10, -65];
        assert.deepEqual(actual, expected);
    });

    it('Testing for fixed test 2', () => {
        let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
        let actual = countPositivesSumNegatives(testData);
        let expected = [8, -50];
        assert.deepEqual(actual, expected);
    });
});
