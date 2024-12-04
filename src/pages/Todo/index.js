import { React, useState } from "react"

import { TodoForm } from "./TodoForm"
import { TodoList } from "./TodoList";

import './index.css'

const TodoPage = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (task) => {
        const newTodo = {
            task,
            completed: false,
            id: todos.length + 1
        }
        setTodos([...todos, newTodo])
    }

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => {
            return todo.id === id ? { ...todo, completed: !todo.completed } : todo
        }));
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="todo-container">
                <h1>Todo</h1>
                <TodoForm addTodo={addTodo} />
                <h2>TodoList:</h2>
                <TodoList
                    todos={todos}
                    deleteTodo={deleteTodo}
                    toggleTodo={toggleTodo}
                />
            </div>
        </div>
    )
}

export default TodoPage