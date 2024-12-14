import { useDispatch } from 'react-redux'
import { deleteTodo, toggleTodo } from '../../store/slices/todoSlice'
import './index.css'

export default function TodoItem ({todo}) {
    const dispatch = useDispatch()
    
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
                    onClick={() => dispatch(toggleTodo(todo.id))}
                >
                    {todo.title}
                </li>
            </ul>
            <button
                onClick={() => dispatch(deleteTodo(todo.id))}
            >
                X
            </button>
        </div>
    )
}