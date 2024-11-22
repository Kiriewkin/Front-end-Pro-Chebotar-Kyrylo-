import { createTodo, deleteTodo, updateTodo } from './api.js';
import { fetchTodos } from './api.js';

const todoInput = document.querySelector('#todoInput');
const todoBtn = document.querySelector('#todoBtn');
const todoList = document.querySelector('#todoList');

export function renderTodos(todos) {
    todoList.innerHTML = '';

    todos.forEach(todo => {
        const todoItem = document.createElement('li');
        todoItem.classList.add(`new-todo`)
        todoItem.textContent = todo.title;
        todoItem.dataset.id = todo.id;

        const buttonDiv = document.createElement('div');

        const editButton = document.createElement('button');
        editButton.classList.add(`edit-todo`)
        editButton.textContent = 'Редактировать';
        editButton.addEventListener('click', async () => {
            const newTitle = prompt('Введите новое название задачи:', todo.title);
            if (newTitle) {
                try {
                    await updateTodo(todo.id, { title: newTitle });
                    const updatedTodos = await fetchTodos();
                    renderTodos(updatedTodos);
                } catch (error) {
                    console.error('Ошибка при редактировании задачи:', error);
                }
            }
        });
        
        const deleteButton = document.createElement('button');
        deleteButton.classList.add(`delete-todo`)
        deleteButton.textContent = 'Удалить';
        deleteButton.addEventListener('click', async () => {
            try {
                await deleteTodo(todo.id);
                const updatedTodos = await fetchTodos();
                renderTodos(updatedTodos);
            } catch (error) {
                console.error('Ошибка при удалении задачи:', error);
            }
        });

        todoItem.appendChild(buttonDiv);
        buttonDiv.appendChild(editButton);
        buttonDiv.appendChild(deleteButton);
        todoList.appendChild(todoItem);
    });
}

export function setupEventListeners() {
    todoBtn.addEventListener('click', async () => {
        const title = todoInput.value.trim();

        if (title) {
            try {
                await createTodo({ title });
                const updatedTodos = await fetchTodos();
                renderTodos(updatedTodos);
                todoInput.value = '';
            } catch (error) {
                console.error('Ошибка при создании задачи:', error);
            }
        } else {
            alert('Введите текст задачи');
        }
    });
}
