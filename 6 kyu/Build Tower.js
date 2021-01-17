// https://www.codewars.com/kata/576757b1df89ecf5bd00073b

function towerBuilder(nFloors) {
    const asterisk = '*';
    const tower = [];
    const maxLength = nFloors + nFloors - 1;

    for (let index = nFloors; index > 0; index--) {
        const sideSpaces = nFloors - index;
        const tempArr = Array(maxLength - sideSpaces * 2).fill(asterisk);
        const spacesArr = Array(nFloors - index).fill(' ');

        tempArr.unshift(spacesArr.join(''));
        tempArr.push(spacesArr.join(''));

        tower.push(tempArr.join(''));
    }

    return tower.reverse();
}

console.log(towerBuilder(1));
console.log(towerBuilder(3));
console.log(towerBuilder(5));
console.log(towerBuilder(9));