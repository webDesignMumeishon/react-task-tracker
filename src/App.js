// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Task from './components/Task';
import { useState } from 'react'
import AddTask from './components/AddTask';



function App() {
  //What we wanna call this piece of state | a function to update the state

  //The button add should toggle the form. 
  //First the button should be hidden and when the button is pressed the form have to toggle
  //The form is gonna be a dependent on this piece of state
  //true = shows // false = hides
  const [showAddTask, setShowAddTask] = useState(true)


  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 9:30pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Party at the Club',
      day: 'Feb 11th at 11:30pm',
      reminder: false
    },
    
  ])

  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //Delete Task Function 
  const deleteTask = (id) => {
    //setTask is to deal with the mutable state
    setTasks(tasks.filter((task) => task.id !== id))
  }


  //Toggle reminder Function
  const toggleReminder = (id) => {
    setTasks(
      //[NEW] {...task} the keys and values are expanded in a new object. The spread operator is used to spread across 
      //all the tasks properties and values
      //{...task, reminder: !task.reminder} the second argument reassign a new value to the reminder property.
      tasks.map((task) => {return task.id === id ? {...task, reminder: !task.reminder} : task})
    )
  }


  return (
    <div className="container">
      {/* onAdd is gonna get passed to header as a prop. We set the state showAddTask to the oposite of the currrent value */}
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}  title='Task Tracker'/>

      {showAddTask && <AddTask onAdd={addTask}/>}

      {tasks.length > 0 ?
      <Task tasks = {tasks}
      //onDelete is going to be a prop of "task"
      onDelete = {deleteTask} 
      //Toggle reminder
      onToggle={toggleReminder}
      /> : 'No tasks To Show'}
    </div>
  );
}

export default App;
