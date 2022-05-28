// https://www.codewars.com/kata/525c7c5ab6aecef16e0001a5/train/javascript

function parseInt(string) {
    const memoNums = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        ten: 10,
        eleven: 11,
        twelve: 12,
        thirteen: 13,
        fourteen: 14,
        fifteen: 15,
        sixteen: 16,
        seventeen: 17,
        eighteen: 18,
        nineteen: 19,
        twenty: 20,
        thirty: 30,
        forty: 40,
        fifty: 50,
        sixty: 60,
        seventy: 70,
        eighty: 80,
        ninety: 90,
        hundred: 100,
        thousand: 1000,
        million: 1000000
    };
    const nums = string.split(' ');

    const parseSimpleInt = num => {
        if (memoNums[num]) return memoNums[num];

        const tempNums = num.split('-');
        let result = 0;

        for (const tempNum of tempNums) {
            result = result + memoNums[tempNum];
        }

        return result;
    };

    const parseComplicatedInt = nums => {
        nums = nums.filter(num => num !== 'and');

        let result = 0;
        let length = nums.length;

        for (let index = 0; index < length; ) {
            const currentNum = nums[index];
            const nextNum = nums[index + 1];

            if (nextNum && ['hundred', 'thousand', 'million'].includes(nextNum)) {
                if (nextNum === 'hundred') {
                    result += memoNums[currentNum] * memoNums[nextNum];
                } else {
                    result += parseSimpleInt(currentNum);
                    result = result * memoNums[nextNum];
                }

                index = index + 2;

                continue;
            } else if (currentNum === 'thousand') {
                result = result * memoNums['thousand'];
            } else {
                result = result + parseSimpleInt(currentNum);
            }

            index = index + 1;
        }

        return result;
    };

    return nums.length === 1 ? parseSimpleInt(nums[0]) : parseComplicatedInt(nums);
}

parseInt('one'); /*?*/ // 1
parseInt('twenty'); /*?*/ // 20
parseInt('two hundred forty-six'); /*?*/ // 246
