const initialState = {
    tasks : [ ],
    filter :'SHOW_ALL' ,
    completedTasks: [],
};
// creation of the reducer
const addReducer = (state= initialState , action) =>{
    switch (action.type){
        case 'ADD_TASK':
        return {
            ...state,
            tasks : [...state.tasks , action.payload],
        };
        case 'EDIT_TASK' :
            return {
                ...state,
                tasks: state.tasks.map(task =>
                  task.id === action.payload.id
                    ? { ...task, description: action.payload.description }
                    : task
                ),
              };
        case 'TOGGLE_DONE':
            return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id
            ? { ...task, isDone: !task.isDone }
            : task
        ),
      };
        case 'FILTER_TASK' :
            return {
                ...state,
                filter: action.payload
            };
            case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
      case 'FILTER_TASKS' :
        return {
          ...state,
          filter: action.payload
      };
            default:
                    return state ;
    }
};
export default addReducer