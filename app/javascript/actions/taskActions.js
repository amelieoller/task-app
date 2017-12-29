import * as types from "./actionTypes";
import TasksApi from "../api/TasksApi";

const createTask = task => {
  return {
    type: "ADD_TASK",
    task
  };
};

export function loadTasksSuccess(tasks) {
  return { type: types.LOAD_TASKS_SUCCESS, tasks };
}

export const loadTasks = () => {
  return dispatch => {
    return TasksApi
      .getAllTasks()
      .then(tasks => dispatch(loadTasksSuccess(tasks)))
      .catch(error => {
        throw error;
      });
  };
};

export function createTaskSuccess(task) {  
  return {type: types.CREATE_TASK_SUCCESS, task}
}

export function addTask(task) {  
  return function (dispatch) {
    return TasksApi
    .addTask(task).then(task => {
      dispatch(createTaskSuccess(task));
      return task;
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteTaskSuccess(task) {  
  return {type: types.DELETE_TASK_SUCCESS, task}
}

export function deleteTask(task) {  
  return function(dispatch) {
    return TasksApi
    .deleteTask(task).then(() => {
      dispatch(deleteTaskSuccess(task));
      return;
    }).catch(error => {
      throw(error);
    })
  }
}