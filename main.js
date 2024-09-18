function sum() {
    let total = 0;

    return function(value) {
        total += value;
        return total;
    };
}

const add = sum();

console.log(add(4));
console.log(add(26));