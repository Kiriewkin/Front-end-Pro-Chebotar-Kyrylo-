const todoInput = document.querySelector(`#todoInput`);
const todoBtn = document.querySelector(`#todoBtn`);
const todoList = document.querySelector(`#todoList`);

todoBtn.addEventListener(`click`, () => {
    if (todoInput.value.trim() !== "") {
        const newTodo = document.createElement(`li`);
        const deleteTodo = document.createElement(`button`);

        newTodo.textContent = todoInput.value;
        newTodo.classList.add(`new-todo`);

        deleteTodo.innerHTML = `Удалить`;
        deleteTodo.classList.add(`delete-todo`);

        todoList.appendChild(newTodo);
        newTodo.appendChild(deleteTodo);

        todoInput.value = ``;

        deleteTodo.addEventListener(`click`, () => {
            newTodo.remove();
        });
    } else {
        alert("Введите текст задания");
    }
});
