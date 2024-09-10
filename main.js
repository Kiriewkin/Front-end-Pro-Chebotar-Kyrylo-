let number = parseInt(prompt("Введіть ціле число:"), 10);
let isPrime = true;

if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) { 
            isPrime = false; 
            break;
        }
    }
} else {
    isPrime = false;
}

if (isPrime) {
    console.log(`${number} є простим числом.`);
} else {
    console.log(`${number} не є простим числом.`);
}