import React from 'react'
//Each input is gonna have its own piece of state, component level state, not app level state
import { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        //If nothing is in the text variable
        if(!text){
            alert('please add task')
            return
        }
        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    } 

    return (
        <form className='add-form' onSubmit={onSubmit}>

            <div className='form-control'>
                <label>Task</label>
                <input 
                    type="text" 
                    placeholder='Add Task'
                    value={text}
                    onChange={(e) => setText(e.target.value)} />
            </div>

            <div className='form-control'>
                <label>Day And Time</label>
                <input 
                    type="text" 
                    placeholder='Add Task' 
                    value={day}
                    onChange={(e) => setDay(e.target.value)} />
            </div>

            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input 
                    type="checkbox" 
                    checked = {reminder}
                    placeholder='Add Task' 
                    value={reminder}
                    //Because this is a checkbox we have to use 'currentTarget' and not 'target'
                    onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type="submit" value='Save Task' className='btn btn-block'/>
        </form>
    )
}

export default AddTask
