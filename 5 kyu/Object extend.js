// https://www.codewars.com/kata/51f9d3a6e5a42591ae0001eb/train/javascript

const extend = function () {
    const resObj = {};
    const objArgs = [];

    for (const arg of arguments) {
        if (typeof arg !== 'object' || Array.isArray(arg) || arg === null || !Array.from(Object.keys(arg)).length) {
            continue;
        }

        objArgs.push(arg);
    }

    if (!objArgs.length) return resObj;

    objArgs.reverse();

    for (const obj of objArgs) {
        Object.assign(resObj, obj);
    }

    return resObj;
};

extend({ a: 1, b: 2 }, { c: 3 });
extend({ a: 1, b: 2 }, { c: 3 }, { d: 4 });
extend({ a: 1, b: 2 }, { a: 3, c: 3 });
extend({ a: false, b: null }, { a: true, b: 2, c: 3 });
extend({ a: 1, b: 2 }, { c: 3 }, { d: 5 });
extend({
    0: { a: 1, b: 2, length: 6 },
    1: [],
    2: 'nope',
    3: false,
    4: [Function],
    5: { c: 3, a: 3 }
});
extend(
    1,
    { a: 1, b: 2 },
    { c: 3 },
    { d: 4 },
    { e: 5 },
    { g: 6 },
    { f: 7 },
    { a: 1, b: 2 },
    { c: 3, a: 3 },
    { a: 1, b: 2, length: 6 },
    [],
    'nope',
    false,
    [Function],
    { c: 3, a: 3 }
);
