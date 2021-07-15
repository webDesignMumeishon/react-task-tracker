import React from 'react'
import TaskSingle from './TaskSingle'

const Task = ({tasks, onDelete, onToggle}) => {
   
    return (
        <div>
            {tasks.map((task) => (
            <TaskSingle 
                key={task.id}
                task={task}
                onDelete = {onDelete}
                onToggle = {onToggle}
            ></TaskSingle>
            ))}
        </div>  
    )
}

export default Task
