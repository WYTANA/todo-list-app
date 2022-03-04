import React, { useState } from 'react'



const TaskInput = ({ tasks, setTasks }) => {

    const [input, setInput] = useState("")

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleForm = (e) => {
        e.preventDefault()
        const newTask = {
            id: 7,
            text: input,
            status: false,
        }

        setTasks([newTask, ...tasks])
    }

    return (
        <div className="Task-input">
            <div className="Check">
                <div className="Checkmark">
                    X
                </div>
            </div>
            <div className="New-Todo-Input">
                <form onSubmit={handleForm}>
                    <input onChange={handleChange} id="Todo-input" text="text" placeholder="Create a new task ..." />
                </form>
            </div>
        </div>
    )
}

export default TaskInput
