
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { edit_task, delete_task, toggle_done } from '../Actions/addAction';
import './task.css'
import { MdDelete } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { IoMdDoneAll } from "react-icons/io";
import { MdOutlineSaveAlt } from "react-icons/md";
import { MdCancelPresentation } from "react-icons/md";

import { motion } from "framer-motion"

const Task = ({ task,onToggleDone }) => {
  const dispatch = useDispatch();
  // declaration of state
  const [editMode, setEditMode] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);

  // function edit task for button save for updating
  const handleEditTask = () => {
    dispatch(edit_task({ id: task.id, description: editedDescription }));
    setEditMode(false);
  };

// function delete task for button delete
  const handleDeleteTask = () => {
    dispatch(delete_task(task.id));
  };

  // function toggle done task for button isdone
  const handleToggleDone = () => {
    onToggleDone(task)
}

// function cancel task for button cancel for updating
const handleCancelEdit = () => {
  setEditMode(false);
};

  return (
    <motion.div className='save' 
    initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
      animate={{ x: 0, transition: { type: "spring", duration: 2 } }}>
      {editMode ? (
        <div >
          <div className='inputchange'>
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          /> 
          </div>
          <div className='buttonchange'>
          {/* insert two button for updating task update and save*/}
          <button onClick={handleEditTask}style={{color:'#3c40c6'}}><MdOutlineSaveAlt /></button>
          <button onClick={handleCancelEdit}style={{color:'red'}} ><MdCancelPresentation /></button>
        </div>
        </div>
      ) : (
        <div>
          <div className='inp'>
          <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
            {task.description}
          </span>
          </div>
          <div className='buttons'>
          {/* insert three button when adding task delete, isdone and update*/}
          <button onClick={handleToggleDone} style={{color:'green'}}><IoMdDoneAll /></button>
          <button onClick={handleDeleteTask} style={{color:'red'}}><MdDelete /></button>
          <button onClick={() => setEditMode(true)} style={{color:'#1B1464'}}><AiOutlineEdit /></button>
        </div>
        </div>
      )}
    </motion.div>
  );
};

export default Task;



