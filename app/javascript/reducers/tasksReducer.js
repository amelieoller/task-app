import * as types from "../actions/actionTypes";
import initialState from "./initalState";

export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_TASKS_SUCCESS:
      return action.tasks;

    case types.CREATE_TASK_SUCCESS:
      return [
        ...state.filter(task => task.id !== action.task.id),
        Object.assign({}, action.task)
      ];

    case types.DELETE_TASK_SUCCESS:
      return state.filter(task => task.id !== action.task.id);

    default:
      return state;
  }
}
