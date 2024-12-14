import { React } from "react"

import { TodoForm } from "./TodoForm"
import { TodoList } from "./TodoList";

import './index.css'

const TodoPage = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="todo-container">
                <h1>Todo</h1>
                <TodoForm />
                <h2>TodoList:</h2>
                <TodoList/>
            </div>
        </div>
    )
}

export default TodoPage