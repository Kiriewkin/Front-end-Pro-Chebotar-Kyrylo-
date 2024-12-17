import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { toggleTodoFromLocal, editTodoFromLocal } from '../../store/slices/todoSlice';

import { deleteTodo, updateTodo } from '../../store/thunk/todoThunk';

import './index.css';

export default function TodoItem({ todo }) {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(todo.title);

    const handleToggle = () => {
        if (todo.id <= 200) {
            dispatch(updateTodo({
                title: todo.title,
                id: todo.id,
                completed: !todo.completed
            }));
        } else {
            dispatch(toggleTodoFromLocal(todo.id));
        }
    };

    const handleEdit = () => {
        const updatedTodo = {
            id: todo.id,
            title: newTitle,
            completed: todo.completed,
        };
    
        if (todo.id <= 200) {
            dispatch(updateTodo(updatedTodo));
        } else {
            dispatch(editTodoFromLocal(updatedTodo));
        }
    
        setIsEditing(false);
    };

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
                <li className='new-todo' onClick={handleToggle}>
                    {isEditing ? (
                        <input
                            type="text"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            onBlur={handleEdit}
                            autoFocus
                        />
                    ) : (
                        todo.title
                    )}
                </li>
            </ul>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 5 }}>
                <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                <button onClick={() => setIsEditing(true)}>{isEditing ? `Save` : `Edit`}</button>
            </div>
        </div>
    );
}
