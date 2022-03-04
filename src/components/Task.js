import React from 'react'

const Task = ({ text }) => {
    return (
        <div className="Task-item">
            <div className="Check">
                <div className="Checkmark">
                    X
                </div>
            </div>
            <div className="Task-text">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Task