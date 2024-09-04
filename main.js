// HomeWork 3.1  Перелік типів

let stringType = "Hello,Ihor";
let numberType = 25;
let booleanType = false;
let undefinedType = undefined;
let nullType = null;
let symbolType = Symbol("id");

console.log(`stringType: ${typeof stringType}`);
console.log(`numberType: ${typeof numberType}`);
console.log(`booleanType: ${typeof booleanType}`);
console.log(`undefinedType: ${typeof undefinedType}`);
console.log(`nullType: ${typeof nullType}`);
console.log(`symbolType: ${typeof symbolType}`);

// HomeWork 3.2
let userName = prompt("What is your name?");
let userAge = prompt("How old are you?");
let userPhone = prompt("Your phone number?");

console.log(`Hello ${userName}, you are ${userAge} years old, your phone number: ${userPhone}`);

// HomeWork 3.3

let stringNumber = "10369";
let realNumber = +stringNumber;

let fifthNumber = realNumber % 10;
let fourthNumber = Math.floor(realNumber / 10) % 10;
let thirdNumber = Math.floor(realNumber / 100) % 10;
let secondNumber = Math.floor(realNumber / 1000) % 10;
let firstNumber = Math.floor(realNumber / 10000) % 10;

console.log(`${firstNumber} ${secondNumber} ${thirdNumber} ${fourthNumber} ${fifthNumber}`);

