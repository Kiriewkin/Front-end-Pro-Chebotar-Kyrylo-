import { useState } from "react"

import './index.css'

export const TodoForm = ({addTodo}) => {
    const [task, setTask] = useState('')

    const handleChange = (e) => {
        setTask(e.target.value)
    }

    const handleSumbit = () => {
        if (task) {
            addTodo(task);
            setTask('')
        }
    }

    return (
        <div style={{display: 'flex'}}>
            <input
                type="text"
                value={task}
                onChange={handleChange}
                placeholder="Enter Task" 
                className="todo-input"
                />
            <button onClick={handleSumbit} className="btn-form">Submit</button>
        </div>
    )
}
