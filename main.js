const textContainer = document.querySelector(`.text-container`);
const text = document.querySelector(`.text`);
const btnChangeColor = document.querySelector(`.btnChangeColor`);

btnChangeColor.addEventListener(`click`, () => {
    if (text.style.color === 'red') {
        text.style.color = '';
    } else {
        text.style.color = 'red';
    }
});
