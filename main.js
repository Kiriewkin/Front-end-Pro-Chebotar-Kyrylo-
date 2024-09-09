let ageUser = prompt("Ваш год рождения?");
let birthYear = +ageUser;
let cityUser = prompt("В каком городе вы живете?");
let hobbyUser = prompt("Ваш любимый вид спорта?");

console.log(`Ваш год рождения: ${birthYear}`);
console.log(cityUser);
console.log(hobbyUser);

if (cityUser === "Киев") {
    console.log("Ты живешь в столице Украины");
} else if (cityUser === "Вашингтон"){
    console.log("Ты живешь в столице США");
} else if (cityUser === "Лондон"){
    console.log("Ты живешь в столице Великобритании")
} else {
    console.log(`Ты живешь в городе ${cityUser}`)
}

if (ageUser === null || ageUser === "") {
    birthYear = null;
} else {
    birthYear = +ageUser;
}

if (birthYear === null) {
    console.log("Шкода, що Ви не захотіли ввести свій рік народження.");
}