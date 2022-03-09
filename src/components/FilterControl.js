import React from 'react'

// accepting props from TaskList
const FilterControl = ({ filterStatus, setFilterStatus, filteredTasks }) => {

    // how can I track filter status? Move to App.js

    console.log(filterStatus, filteredTasks)

    const handleStatus = (status) => {
        setFilterStatus(status)
    }

    return (
        <div className="items-status">
            <span onClick={() => handleStatus("all")}>All</span> |
            <span onClick={() => handleStatus("active")}>Active</span> |
            <span onClick={() => handleStatus("completed")}>Completed</span>
        </div>
    )
}

export default FilterControl