import React from 'react'
import {useSelector,useDispatch} from'react-redux'
import Task from './Task'
import { toggle_done } from '../Actions/addAction'



const ListTask = ({task}) => {
    const dispatch= useDispatch();
    /* give a state with use selector  and filter*/
    const tasks = useSelector((state) => {
        if (state.addReducer.filter === 'SHOW_COMPLETED') {
            return state.addReducer.tasks.filter((task) => task.isDone);
        } else if (state.addReducer.filter === 'SHOW_NOT_COMPLETED') {
            return state.addReducer.tasks.filter((task) => !task.isDone);
        }
        return state.addReducer.tasks;
        } );
        /* function toggle is done*/
        const handleToggleDone = (task) => {
            dispatch(toggle_done(task))
        }
    return (
    <div>
        {tasks.map(task => (
        <Task  key={task.id} task={task}
        onToggleDone={handleToggleDone}/>
        

        ))}
    </div>
    )
}

export default ListTask
