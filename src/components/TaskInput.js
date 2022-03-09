import React, { useState } from 'react'

// How do I add a new todo item to the list?
// Capture whatever I type in:
// - how can I track the input values in state?
// - all changes to input should update state
// - see stack text editor project
// Push to the list via form:
// - stop default action
// - add input to new object through properties
// - set/push the new object to the data array


// accepting props from App
const TaskInput = ({ tasks, setTasks }) => {

    const [input, setInput] = useState("")

    const handleChange = (e) => {
        setInput(e.target.value)
    }


    const handleForm = (e) => {
        e.preventDefault()
        const newTask = {
            id: [...tasks].length + 1,
            text: input,
            status: false,
        }

        // console.log(newTask)
        setTasks([newTask, ...tasks])
        console.log(1, [...tasks])

    }

    return (
        <div className="task-input">
            <div className="check">
                <div className="checkmark"></div>
            </div>
            <div className="new-todo-input">
                <form onSubmit={handleForm}>
                    <input onChange={handleChange} id="todo-input" text="text" placeholder="Create a new task ..." />
                </form>
            </div>
        </div>
    )
}

export default TaskInput
