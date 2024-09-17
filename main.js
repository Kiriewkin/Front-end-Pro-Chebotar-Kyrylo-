function meanNumber(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] !== 'number') {
            console.log("Массив должен содержать только числа");
            return;
        }
        sum += numbers[i];
    }

    let mean = sum / numbers.length;
    return mean;
}

let numbers = [1, 2, 50, 4, 5];
console.log(meanNumber(numbers));
