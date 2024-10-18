const todoInput = document.querySelector(`#todoInput`);
const todoBtn = document.querySelector(`#todoBtn`);
const todoList = document.querySelector(`#todoList`);

let todoListLocalStorage = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

function saveTodoToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todoListLocalStorage));
}

function createTodoElement(text, completed = false) {
    const newTodo = document.createElement('li');
    const deleteTodo = document.createElement('button');
    const checkboxTodo = document.createElement('input');
    const labelTodo = document.createElement('span');

    checkboxTodo.setAttribute('type', 'checkbox');
    checkboxTodo.classList.add('checkbox');
    checkboxTodo.checked = completed;

    labelTodo.textContent = text;
    if (completed) {
        labelTodo.classList.add('completed');
    }

    deleteTodo.innerHTML = 'Удалить';
    deleteTodo.classList.add('delete-todo');

    newTodo.classList.add('new-todo');
    newTodo.appendChild(checkboxTodo);
    newTodo.appendChild(labelTodo);
    newTodo.appendChild(deleteTodo);
    todoList.appendChild(newTodo);

    checkboxTodo.addEventListener('change', () => {
        if (checkboxTodo.checked) {
            labelTodo.classList.add('completed');
        } else {
            labelTodo.classList.remove('completed');
        }
        updateTodoStatusInLocalStorage(text, checkboxTodo.checked);
    });

    deleteTodo.addEventListener('click', () => {
        newTodo.remove();
        removeTodoFromLocalStorage(text);
    });
}

todoBtn.addEventListener('click', () => {
    if (todoInput.value.trim() !== '') {
        const todoText = todoInput.value;

        createTodoElement(todoText);

        todoListLocalStorage.push({ text: todoText, completed: false });
        saveTodoToLocalStorage();

        todoInput.value = '';
    } else {
        alert('Введите текст задания');
    }
});

function updateTodoStatusInLocalStorage(text, completed) {
    const todoIndex = todoListLocalStorage.findIndex(todo => todo.text === text);
    if (todoIndex !== -1) {
        todoListLocalStorage[todoIndex].completed = completed;
        saveTodoToLocalStorage();
    }
}

function removeTodoFromLocalStorage(text) {
    todoListLocalStorage = todoListLocalStorage.filter(todo => todo.text !== text);
    saveTodoToLocalStorage();
}

document.addEventListener('DOMContentLoaded', () => {
    todoListLocalStorage.forEach(todo => {
        createTodoElement(todo.text, todo.completed);
    });
});
