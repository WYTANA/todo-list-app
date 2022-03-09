import React, { useState } from 'react'
import Check from "../images/icon-check.svg"

// accept props from TaskList
const Task = ({ text, task, tasks, setTasks, setFilteredTasks }) => {

    // create a state variable to keep track of each task and set each to mutable
    // set state to the current task
    // each individual task should be mutable
    // track each task
    const [mutableTask, setMutableTask] = useState(task)

    // check each mutable task's status with ternary operator
    // true = checked class name visible to div and false = checked class name hidden from div
    // conditional rendering
    // add checked class to css to get strikethrough as well 
    const checked = mutableTask.status ? "checked" : ""

    // access images from src folder
    // true = icon visible to div and false = icon hidden from div
    const checkIcon = mutableTask.status ? (<img src={Check} alt="completed" />) : ""

    const markCompleted = () => {
        console.log(tasks)
        // update css to marked (checked, color, strikethrough) (Frontend)
        // switch task status
        // access the task
        // access the status and then switch the boolean to opposite
        // update mutable task with new status
        setMutableTask({ ...mutableTask, status: !mutableTask.status })

        // update mutable tasks to the new array of obj and statuses (Backend)
        const updatedTasks = tasks.map((item) => {
            // find the item that matches the task w/
            // switch item status
            return task.id === item.id ? { ...item, status: !item.status } : item
        })

        setTasks(updatedTasks)
    }

    return (
        <div className="task-item">
            {/* click in the area with check class */}
            <div className="check" onClick={markCompleted}>
                {/* icon here */}
                <div className={`checkmark ${checked}`}>
                    {checkIcon}
                </div>
            </div>
            {/* text output here */}
            <div className={`task-text ${checked}`}>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Task 