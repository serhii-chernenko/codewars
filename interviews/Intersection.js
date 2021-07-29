const intersection = (arr1, arr2) => {
    const nums = {};
    const result = [];

    for (const num of arr1) {
        nums[num] = true;
    }

    for (const num of arr2) {
        if (nums[num]) {
            result.push(num);
        }
    }

    return result;
};

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []
