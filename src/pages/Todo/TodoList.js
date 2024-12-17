import { useSelector } from "react-redux"

import TodoItem from "./TodoItem"

export const TodoList = () => {
    const todos = useSelector((state) => state.todo.todos)
    console.log(todos)
    return (
        <div style={{ maxWidth: '100%' }}>
            {todos.map(todo => (
                <TodoItem key={`${todo.id}--${todo.title}`} todo={todo} />
            ))}
            {todos.length === 0 ? <p>TodoList is empty!</p> : ""}
        </div>
    )
}