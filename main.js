const btnAdd = document.querySelector(`#btnAdd`)
const btnOpenLink = document.querySelector(`#btnOpenLink`)

let linkUser = '';

btnAdd.addEventListener(`click`, () => {
    linkUser = prompt(`Куда хотите перейти?`);
})

btnOpenLink.addEventListener(`click`, () => {
    if(linkUser) {
        window.location.href = linkUser;
    }
    else {
        alert(`Введите ссылку`)
    }
})

