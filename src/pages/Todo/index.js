import { React, useEffect } from "react"

import { fetchTodos } from "../../store/thunk/todoThunk";
import { useDispatch, useSelector } from "react-redux";

import { TodoForm } from "./TodoForm"
import { TodoList } from "./TodoList";

import './index.css'

const TodoPage = () => {
    const loading = useSelector((state) => (state.todo.loading))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos())
    },[dispatch])

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="todo-container">
                <h1>Todo</h1>
                <TodoForm />
                <h2>TodoList:</h2>
                {loading && <p>Loading...</p>}
                <TodoList/>
            </div>
        </div>
    )
}

export default TodoPage