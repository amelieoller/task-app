import * as types from "../actions/actionTypes";
import taskInitalState from "./taskInitalState";

export default function tasksReducer(state = taskInitalState, action) {
  switch (action.type) {
    case types.LOAD_TASKS_SUCCESS:
      return action.tasks;
    case types.CREATE_TASK_SUCCESS:
      return [...state, action.task]
    case types.UPDATE_TASK_SUCCESS:
      return state.map(
        task =>
          task.id === action.task.id
            ? Object.assign({}, ...task, action.task)
            : task
      );
    case types.DELETE_TASK_SUCCESS:
      return state.filter(task => task.id !== action.id);
    case types.CHECK_TASK_SUCCESS:
      return state.map(
        task =>
          task.id === action.task.id
            ? { ...task, completed: !task.completed }
            : task
      );
    default:
      return state;
  }
}
