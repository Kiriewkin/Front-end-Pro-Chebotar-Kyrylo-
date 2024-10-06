const randomImage = document.querySelector(`#randomImage`);
const min = 1;
const max = 9;
const randomIndex = Math.floor(Math.random() * (max + min - 1) + min);

randomImage.src = `./images/${randomIndex}.jpg`;
