// create an action for all the button
// create an action for adding task
export const add_task =(task) => {
    return {
        type :'ADD_TASK',
        payload :task,
    }
};

// create an action for update task
export const edit_task =(id,description) => {
    return {
        type :'EDIT_TASK',
        payload :id,description,
    }
};

export const filter_task =(filter) => {
    return {
        type :'FILTER_TASK',
        payload :filter,
    }
};
// create an action filter tasks
export const filter_tasks =(filter) => {
  return {
      type :'FILTER_TASKS',
      payload :filter,
  }
};

// create an action for delete task
export const delete_task = (taskId) => {
    return {
      type: 'DELETE_TASK',
      payload: taskId,
    };
  };

// create an action for is done task
  export const toggle_done = (task) => {
    return {
      type: 'TOGGLE_DONE',
      payload: task,
    };
  };

  export const show_not_completed = () => {
    return {
        type: 'SHOW_NOT_COMPLETED',
    };
};

