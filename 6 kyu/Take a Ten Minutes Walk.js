// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

function isValidWalk(walk) {
    walk = walk.join('');

    const match = symbol => {
        const res = walk.match(new RegExp(symbol, 'g'));

        return res ? res.length : 0;
    };

    return walk.length === 10 && match('n') === match('s') && match('w') === match('e');
}
