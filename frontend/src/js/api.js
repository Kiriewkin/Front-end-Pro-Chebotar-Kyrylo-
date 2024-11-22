const apiUrl = 'http://localhost:3000/todos';

export async function fetchTodos() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Ошибка при загрузке задач');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function createTodo(todo) {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todo),
        });

        if (!response.ok) {
            throw new Error('Ошибка при создании задачи');
        }

        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function updateTodo(id, updatedTodo) {
    const response = await fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTodo),
    });
    if (!response.ok) throw new Error('Unable to update todo');
    return response.json();
}

export async function deleteTodo(todoId) {
    try {
        const response = await fetch(`${apiUrl}/${todoId}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Ошибка при удалении задачи');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}
