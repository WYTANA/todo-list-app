import React from 'react'
import FilterControl from './FilterControl'
import Task from './Task'

// accepting props from App
const TaskList = ({ tasks, setTasks, filterStatus, setFilterStatus, filteredTasks }) => {

    return (
        <div className="task-list-wrapper">
            <div className="task-list">
                {/* map through the filtered tasks and keep original data*/}
                {
                    filteredTasks.map((task) => {
                        // Task has these children
                        return <Task
                            key={task.id}
                            text={task.text}
                            status={task.status}
                            tasks={tasks}
                            setTasks={setTasks}
                            task={task}
                        />
                    })
                }
            </div>
            <div className="task-items-info">
                <div className="items-left">
                    {filteredTasks.length} items here!🎉
                </div>
                <FilterControl
                    filterStatus={filterStatus}
                    setFilterStatus={setFilterStatus}
                    filteredTasks={filteredTasks}
                />
                <div className="items-clear">
                    <span>Clear Completed</span>
                </div>
            </div>
        </div>


    )
}

export default TaskList