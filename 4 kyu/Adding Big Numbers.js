// https://www.codewars.com/kata/525f4206b73515bffb000b21

function getDigit(x, digitIndex) {
    return digitIndex >= x.length ? 0 : Number(x.charAt(x.length - digitIndex - 1));
}

function add(a, b) {
    if (Number(a) + Number(b) < Number.MAX_SAFE_INTEGER) {
        return (Number(a) + Number(b)).toString();
    }

    let maxLength = Math.max(a.length, b.length);
    let result = '';
    let [borrow, leadingZeros] = Array(2).fill(0);

    for (let index = 0; index < maxLength; index++) {
        let digit = getDigit(a, index) + getDigit(b, index) + borrow;

        borrow = 0;

        while (digit >= 10) {
            digit -= 10;
            borrow++;
        }

        if (digit === 0) {
            result = 0 + result;
            leadingZeros++;
        } else {
            for (let index = 0; index < leadingZeros; index++) {
                result = 0 + result;
            }

            leadingZeros = 0;

            result = digit + result;
        }
    }

    if (borrow > 0) result = borrow + result;

    return result.replace(/0{2}/g, 0);
}

console.log(add("123", "321")); // "444"
console.log(add("11", "99")); // "110"