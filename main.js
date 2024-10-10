const userInfo = {};
let isValid = true;

const phoneRegex = /^\+380\d{9}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function formValidation() {
    isValid = true;

    document.querySelector(`#nameError`).innerHTML = ``;
    document.querySelector(`#messageError`).innerHTML = ``;
    document.querySelector(`#phoneError`).innerHTML = ``;
    document.querySelector(`#emailError`).innerHTML = ``;

    if (!userInfo.name) {
        document.querySelector(`#nameError`).innerHTML = `Это обязательное поле`;
        isValid = false;
    }

    if (userInfo.message.length < 5) {
        document.querySelector(`#messageError`).innerHTML = `Поле должно быть больше 5 символов`;
        isValid = false;
    }

    if (!userInfo.email) {
        document.querySelector(`#emailError`).innerHTML = `Это обязательное поле`;
        isValid = false;
    } else if (!emailRegex.test(userInfo.email)) {
        document.querySelector(`#emailError`).innerHTML = `Введите валидный email`;
        isValid = false;
    }

    if (!userInfo.phone) {
        document.querySelector(`#phoneError`).innerHTML = `Это обязательное поле`;
        isValid = false;
    } else if (!phoneRegex.test(userInfo.phone)) {
        document.querySelector(`#phoneError`).innerHTML = `Введите валидный номер телефона (+380)`;
        isValid = false;
    }

    return isValid;
}

document.querySelector(`#combinedForm`).addEventListener(`submit`, (e) => {
    e.preventDefault();

    userInfo.name = document.querySelector(`#name`).value.trim();
    userInfo.message = document.querySelector(`#message`).value.trim();
    userInfo.phone = document.querySelector(`#phone`).value.trim();
    userInfo.email = document.querySelector(`#email`).value.trim();

    if (formValidation()) {
        console.log(`User Data:`, userInfo);
    }
});
