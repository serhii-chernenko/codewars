// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript

function filter_list(l) {
    return l.filter(item => typeof item !== 'string');
}

filter_list([1, 2, 'a', 'b']); // ? [1, 2]
filter_list([1, 'a', 'b', 0, 15]); // ? [1, 0, 15]
filter_list([1, 'a', 'b', 0, 15]); // ? [1, 2, 123]
