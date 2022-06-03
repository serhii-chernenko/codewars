// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript

function longestConsec(strarr, k) {
    let longestWorld = '';

    if (!strarr.length || k < 1 || k > strarr.length) return longestWorld;

    for (let index = 0; index < strarr.length; index++) {
        const tempString = strarr.slice(index, index + k).join('') || '';

        if (tempString.length > longestWorld.length) {
            longestWorld = tempString;
        }
    }

    return longestWorld;
}

const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

function testing(actual, expected) {
    assert.strictEqual(actual, expected);
}

describe('longestConsec', function () {
    it('Basic tests', function () {
        testing(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2), 'abigailtheta');
        testing(
            longestConsec(['ejjjjmmtthh', 'zxxuueeg', 'aanlljrrrxx', 'dqqqaaabbb', 'oocccffuucccjjjkkkjyyyeehh'], 1),
            'oocccffuucccjjjkkkjyyyeehh'
        );
        testing(longestConsec([], 3), '');
        testing(
            longestConsec(
                ['itvayloxrp', 'wkppqsztdkmvcuwvereiupccauycnjutlv', 'vweqilsfytihvrzlaodfixoyxvyuyvgpck'],
                2
            ),
            'wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck'
        );
        testing(
            longestConsec(['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu'], 2),
            'wlwsasphmxxowiaxujylentrklctozmymu'
        );
        testing(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], -2), '');
        testing(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3), 'ixoyx3452zzzzzzzzzzzz');
        testing(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 15), '');
        testing(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 0), '');
    });
});
