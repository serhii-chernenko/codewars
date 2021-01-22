// https://www.codewars.com/kata/58b38256e51f1c2af0000081

function bestMatch(ALAHLYGoals, zamalekGoals) {
    let subtraction = ALAHLYGoals[0] - zamalekGoals[0];
    let goals = zamalekGoals[0];
    let resultIndex = 0;

    for (let index = 0; index < ALAHLYGoals.length; index++) {
        const difference = ALAHLYGoals[index] - zamalekGoals[index];

        if (difference < subtraction || (difference === subtraction && zamalekGoals[index] > goals)) {
            subtraction = difference;
            goals = zamalekGoals[index];
            resultIndex = index;
        }
    }

    return resultIndex;
}

console.log(bestMatch([6, 4], [1, 2])); // 1
console.log(bestMatch([1], [0])); // 0
console.log(bestMatch([1, 2, 3, 4, 5], [0, 1, 2, 3, 4])); // 4
console.log(bestMatch([3, 4, 3], [1, 1, 2])); // 2
console.log(bestMatch([4, 3, 4], [1, 1, 1])); // 1
console.log(bestMatch([14, 9, 4, 8, 4], [8, 0, 0, 5, 1])); // 3
console.log(
    bestMatch(
        [4, 4, 15, 8, 4, 11, 13, 13, 6, 7, 13, 4, 6, 11, 9, 9, 9],
        [0, 1, 6, 5, 3, 8, 6, 10, 2, 3, 6, 2, 1, 3, 6, 4, 7]
    )
); // 4
