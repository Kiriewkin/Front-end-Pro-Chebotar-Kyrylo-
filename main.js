let number = prompt("Введите трёхзначное число:");

let digit1 = number[0];
let digit2 = number[1];
let digit3 = number[2];

if (digit1 === digit2 && digit2 === digit3) {
    console.log("Все цифры одинаковы");
} else {
    console.log("Не все одинаковые");
}

if (digit1 === digit2 || digit2 === digit3 || digit1 === digit3){
    console.log("Есть две одинаковых");
} else {
    console.log ("Нет двух одинаковых");
}