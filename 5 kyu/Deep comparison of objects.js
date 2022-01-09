// https://www.codewars.com/kata/53c235e4d5cd9c397200021d/train/javascript

function deepCompare(o1, o2) {
    if (typeof o1 === 'object' && typeof o2 === 'object' && o1 !== null && o2 !== null) {
        const keys1 = Object.keys(o1);
        const keys2 = Object.keys(o2);
        const keysOfBiggerObject = keys1.length > keys2.length ? keys1 : keys2;

        return keysOfBiggerObject.every(key => deepCompare(o1[key], o2[key]));
    }

    return o1 === o2;
}

deepCompare({ name: 'Joe' }, { name: 'Joe' }); // ?
deepCompare({ name: 'Joe', surname: 'Smith' }, { name: 'Joe' }); // ?
deepCompare({ arr: [1, 2] }, { arr: [1, 2] }); // ?
deepCompare({ arr: [1, 2] }, { arr: [2] }); // ?
deepCompare({ arr: [1, 2], obj: { test: 'test' } }, { arr: [1, 2], obj: 'test' }); // ?
deepCompare({ arr: [1, 2], obj: { test: 'test' } }, { arr: [1, 2], obj: { test2: 'test2' } }); // ?
