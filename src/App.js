import './App.css';
import TaskInput from './components/TaskInput'
import TaskList from "./components/TaskList"
import { useState, useEffect } from "react"

// Part 1:
// - Finish up minor css
// - Create a data array of objects(todos)
// - Create a state that holds that tasks data
// - Pass that data to Tasklist and map through to create Task component for each task
// - Destrcture props and make Task dynamic
// Part 2:
// - Pass tasks and setTasks state to TaskInput
// - Create input state
// - Set up handleChange function to update input state
// - set value of input to input
// - Create handleForm function to create new Task
// - Create an new task object and how would you add that to the array of tasks ?

const data = [
  { id: 1, text: "Finish contacts hw", status: false },
  { id: 2, text: "Study react hooks", status: false },
  { id: 3, text: "Finish Clever programmer challenge", status: false },
  // { id: 4, text: "Run 1 mile", status: false },
  // { id: 5, text: "Finish errands", status: false },
  // { id: 6, text: "Complete Todo App", status: false },
  { id: 0, text: "Welcome to the Todo App!", status: false },
]

const App = () => {

  // what am I tracking?
  const [tasks, setTasks] = useState(data)
  const [filteredTasks, setFilteredTasks] = useState(tasks)
  const [filterStatus, setFilterStatus] = useState("all")

  // useEffect is a hook that let's us perform side effects at any stage of the component's lifecycle
  // side-effect: api call, add event listener, a function that I want to run
  // Component Lifecycle
  // - compWillMount (first renders)
  // - compDidUpdate (additional renders)
  // - compWillUnmount (component removed from app)
  // - useeffect - [a, b] dependency module: empty means render only once; add arguments and only runs when those functions are called


  // change in filter status should update the tasks to corresponding filter status (all, active, completed)
  // useeffect runs at load (did mount) and then when filter status (state) changes (will update)
  useEffect(() => {
    const handleFilter = () => {
      if (filterStatus === "active") {
        // update tasks with active
        // get array *filtered with active tasks
        // status = false
        setFilteredTasks(tasks.filter((task) => task.status === false))
      } else if (filterStatus === "completed") {
        // update tasks with completed
        // status = true
        setFilteredTasks(tasks.filter((task) => task.status === true))
      } else {
        // all
        setFilteredTasks(tasks)
      }

    }
    handleFilter()
  }, [tasks, filterStatus])

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>TODO</h1>
          <img src="./images/icon-sun.svg" alt="sun" className="rotate" />
        </div>
        <TaskInput
          tasks={tasks}
          setTasks={setTasks}
        />
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          filteredTasks={filteredTasks}
          setFilteredTasks={setFilteredTasks}
        />
      </div>
    </div>
  );
}

export default App
