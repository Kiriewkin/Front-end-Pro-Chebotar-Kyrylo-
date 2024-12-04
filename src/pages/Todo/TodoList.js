import TodoItem from "./TodoItem"

export const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
    return (
        <div style={{maxWidth: '100%'}}>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            ))}

            {todos.length === 0 ? <p>TodoList is empty!</p> : ""}
        </div>
    )
}