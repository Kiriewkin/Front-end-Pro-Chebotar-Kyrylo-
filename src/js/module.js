export {add,minus}

function add(a,b) {
    return a + b
}

function minus (a,b) {
    return a - b
}

export class Person {
    constructor (name,surname,age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    displayInfo() {
        console.log(`Меня зовут ${this.name} ${this.surname}, мне ${this.age} год!`)
    }
}