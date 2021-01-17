// https://www.codewars.com/kata/554ca54ffa7d91b236000023

function deleteNth(arr, n, calc= {}) {
    return arr.filter(item => {
        calc[item] = Math.floor(calc[item] || 0) + 1;

        return calc[item] <= n;
    });
}

console.log(deleteNth([1,1,1,1],2)) // return [1,1]
console.log(deleteNth([20,37,20,21],1)) // return [20,37,21]
