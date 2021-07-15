import React from 'react'
//Bringing an specific icon. Using icons as react components. 
//After installing the icons library the react server needs to be restarted
import {FaTimes} from 'react-icons/fa'

const TaskSingle = ({task, onDelete, onToggle}) => {
    return (
        
        //Make an expression inside className
        <div className={`TaskSingle ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text}     
                <FaTimes style={{color: 'red', cursor: 'pointer'}} 
                //How to pass the id and not using the event passed by default () => onDelete(task.id)
                onClick={() => onDelete(task.id)} />
            </h3>
            <p>{task.day}</p>

        </div>
    )
}

export default TaskSingle
