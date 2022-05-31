// https://www.codewars.com/kata/54edbc7200b811e956000556/javascript

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(sheep => sheep).length;
}

const arr = [
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true
];

countSheeps(arr); /*?*/ // 17 (there are 17 sheep in total)
