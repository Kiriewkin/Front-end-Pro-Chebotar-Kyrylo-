const arrayNumbers = [1, 2, 3, 4, 5, 6];

const checkedEvenNumbers = array => {
    return array.filter(number => number % 2 === 0);
}

const evenNumbers = checkedEvenNumbers(arrayNumbers);
console.log(evenNumbers);
