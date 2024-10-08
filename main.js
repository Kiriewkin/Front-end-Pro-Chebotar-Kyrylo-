const parentDiv = document.querySelector(`#parentDiv`);

parentDiv.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        alert(`Вы нажали на: ${e.target.innerText}`);
    }
});