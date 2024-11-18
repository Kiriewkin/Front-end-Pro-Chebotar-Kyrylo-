import * as module from './js/module.js';

console.log(module.add(10, 9));
console.log(module.minus(9, 3));

const person1 = new module.Person('Кирилл', 'Чеботарь', 21);
person1.displayInfo();

