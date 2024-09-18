function multiply(first) {
    return function(second) {
        return first * second;
    }
}

console.log(multiply(4)(2));
console.log(multiply(4)(8));