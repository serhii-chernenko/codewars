// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

function duplicateCount(text) {
    const arr = text.toLowerCase().split('');
    const memo = {};
    let counter = 0;

    for (const symbol of arr) {
        if (!memo[symbol]) {
            memo[symbol] = 1;

            continue;
        } else if (memo[symbol] > 1) {
            continue;
        }

        memo[symbol] = memo[symbol] + 1;
        counter = counter + 1;
    }

    return counter;
}

duplicateCount(''); /*?*/ // 0
duplicateCount('abcde'); /*?*/ // 0
duplicateCount('aabbcde'); /*?*/ // 2
duplicateCount('aabBcde'); /*?*/ // 2 (should ignore case)
duplicateCount('Indivisibility'); /*?*/ // 1
duplicateCount('Indivisibilities'); /*?*/ // 2
duplicateCount('aA11'); /*?*/ // 2
duplicateCount('ABBA'); /*?*/ // 2
