const express = require('express');
const cors = require('cors');
const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());

let todos = [];

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.post('/todos', (req, res) => {
    const newTodo = { id: todos.length + 1, ...req.body };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.put('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id, 10);
    const index = todos.findIndex(todo => todo.id === todoId);

    if (index !== -1) {
        todos[index] = { id: todoId, ...req.body };
        res.json(todos[index]);
    } else {
        res.status(404).json({ message: 'Задача не найдена' });
    }
});

app.delete('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id, 10);
    const index = todos.findIndex(todo => todo.id === todoId);

    if (index !== -1) {
        todos.splice(index, 1);
        res.status(200).json({ message: 'Задача удалена' });
    } else {
        res.status(404).json({ message: 'Задача не найдена' });
    }
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
