// https://www.youtube.com/watch?v=yhuQaXkB1Sc&ab_channel=WebInterview

function optionalChaining(obj, arr) {
    const iterateKeys = (value, index) => {
        if (!value) {
            return undefined;
        }

        if (value instanceof Object || index < arr.length - 1) {
            return iterateKeys(value[arr[index + 1]], index + 1);
        }

        return value;
    };

    return iterateKeys(obj[arr[0]], 0);
}

const obj = {
    a: {
        b: {
            c: {
                d: 'Hello'
            }
        }
    }
};

console.log(optionalChaining(obj, ['a', 'b', 'c', 'd'])); // Hello
console.log(optionalChaining(obj, ['a', 'b', 'c', 'd', 'e'])); // undefined
console.log(optionalChaining(obj, ['a', 'b', 'c', 'd', 'e'])); // undefined
console.log(optionalChaining(obj, ['b', 'd', 'a'])); // undefined
console.log(optionalChaining(obj, [])); // undefined
