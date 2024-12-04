import './index.css'

export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            border: '1px solid black',
            borderRadius: '5px',
            marginTop: '10px',
            textDecoration: todo.completed ? 'line-through' : 'none'
        }}>
            <ul className='todo-list'>
                <li
                    className='new-todo'
                    onClick={() => toggleTodo(todo.id)}
                >
                    {todo.task}
                </li>
            </ul>
            <button
                onClick={() => deleteTodo(todo.id)}
            >
                X
            </button>
        </div>
    )
}