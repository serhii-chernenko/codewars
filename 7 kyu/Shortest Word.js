// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

function findShort(s) {
    const arr = s.split(' ');

    if (arr.length === 1) return s.length;

    return arr.sort((a, b) => (a.length > b.length ? 1 : -1))[0].length;
}

findShort('bitcoin'); /*?*/ // 7
findShort('bitcoin take over the world maybe who knows perhaps'); /*?*/ // 3
findShort('turns out random test cases are easier than writing out basic ones'); /*?*/ // 3
findShort("Let's travel abroad shall we"); /*?*/ // 2
