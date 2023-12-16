import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add_task,filter_tasks} from '../Actions/addAction'
import './add.css'
import { MdOutlineAddLocation } from "react-icons/md";
import { motion } from "framer-motion"

const AddTask = () => {
    const [task, setTask] = useState('')
    const dispatch = useDispatch()
    // function add task for dispatch action
    const handelAddTask = () => {
        if (task.trim() !== ''){
            dispatch(add_task({id: Date.now(), description: task, isDone: false }));
            setTask('');
        }
        else{
            alert("PLEASE ENTER A VALID TASK");
        }
    }
        // function completed for dispatch action the button completed
        const handleCompleted =() =>{
            dispatch(filter_tasks('SHOW_COMPLETED'));
        }
        // function for dispatch action show all the tassk added 
        const handleShowAll = () => {
            dispatch(filter_tasks('SHOW_ALL'));
        };
        // function for dispatch action not completed the tassk added
        const handleNotCompleted = () => {
            dispatch(filter_tasks('SHOW_NOT_COMPLETED'));
        };
    return (
        <div>
            {/* insert the input and button*/}
            <div className='addinput'>
            <input type='text' placeholder='ADD YOUR TO-DO-LIST HERE'value={task} onChange={e => setTask(e.target.value)}/>
            <motion.button  type='submit' onClick={handelAddTask}  whileHover={{ scale: 1.3 }}
                                    whileTap={{ scale: 0.9 }}> <MdOutlineAddLocation /></motion.button>
            </div>
            <div className='displaybutton'>
                {/* insert two button */}
            <button onClick={handleCompleted}>COMPLETED </button>
            <button onClick={handleNotCompleted}>NOT COMPLETED </button>
            <button  onClick={handleShowAll}>ALL TASK  </button>
            </div>
            
        </div>
    )
}

export default AddTask
