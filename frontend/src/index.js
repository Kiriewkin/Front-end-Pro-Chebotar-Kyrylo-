import { fetchTodos } from './js/api.js';
import { renderTodos, setupEventListeners } from './js/dom.js';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const todos = await fetchTodos();
        renderTodos(todos);
    } catch (error) {
        console.error('Ошибка при загрузке задач:', error);
    }
    setupEventListeners();
});
