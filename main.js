function askNumber() {
    let attempts = 0;

    while (attempts < 10) {
        let userNumber = prompt("Введите число больше 100:");

        if (userNumber === null) {
            console.log("Ввод отменен");
            return;
        }

        userNumber = Number(userNumber);

        if (userNumber > 100) {
            console.log(`Вы ввели ${userNumber}`);
            return;
        }

        attempts++;

        if (attempts === 10) {
            console.log(`Максимальное количество попыток. Останнє введене число: ${userNumber}`);
        }
    }
}

askNumber();
