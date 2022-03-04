import React from 'react'
import FilterControl from './FilterControl'
import Task from './Task'

const TaskList = ({ tasks }) => {

    return (
        <div className="Task-list-wrapper">
            <div className="Task-list">
                {/* map through */}
                {
                    tasks.map((task) => {
                        return <Task
                            key={task.id}
                            text={task.text}
                            status={task.status}
                        />
                    })
                }

            </div>
            <div className="Task-items-info">
                <div className="Items-left">
                    5 items left
                </div>
                <FilterControl />
                <div className="items-clear">
                    <span>Clear Completed</span>
                </div>
            </div>
        </div>


    )
}

export default TaskList