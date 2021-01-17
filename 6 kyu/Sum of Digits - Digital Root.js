// https://www.codewars.com/kata/541c8630095125aba6000c00

function digital_root(n) {
    const result = n.toString().split('').reduce((acc, val) => acc + parseFloat(val), 0);

    if (Math.abs(result) <= 9) {
        return n.toString().split('').reduce((acc, val) => acc + parseFloat(val), 0);
    }

    return digital_root(result);
}

console.log(digital_root(16)) // 7
console.log(digital_root(942)) // 6
console.log(digital_root(132189)) // 6
console.log(digital_root(493193)) // 2