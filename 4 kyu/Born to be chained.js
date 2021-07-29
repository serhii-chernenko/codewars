// https://www.codewars.com/kata/54c27ef1fb7da0118600046a/train/javascript

function chain(fns) {
    function Self(x) {
        this.result = x;
    }

    for (const key in fns) {
        const fn = fns[key];

        Self.prototype[key] = function () {
            const args = [].slice.call(arguments);

            if (this.result != null) {
                args.unshift(this.result);
            }

            return new Self(fn.apply(null, args));
        };
    }

    Self.prototype.execute = function () {
        return this.result;
    };

    return new Self();
}

function sum(x, y) {
    return x + y;
}

function double(x) {
    return sum(x, x);
}

function minus(x, y) {
    return x - y;
}

function addOne(x) {
    return sum(x, 1);
}

const c = chain({ sum: sum, minus: minus, double: double, addOne: addOne });

console.log(c.sum(3, 4).execute()); // 7
console.log(c.sum(1, 2).execute()); // 3
