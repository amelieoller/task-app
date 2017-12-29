import * as types from "./actionTypes";
import TasksApi from "../api/TasksApi";

export function loadTasksSuccess(tasks) {
  return { type: types.LOAD_TASKS_SUCCESS, tasks };
}

export function createTaskSuccess(task) {
  return { type: types.CREATE_TASK_SUCCESS, task };
}

export function updateTaskSuccess(task) {
  return { type: types.UPDATE_TASK_SUCCESS, task };
}

export function deleteTaskSuccess(id) {
  return { type: types.DELETE_TASK_SUCCESS, id };
}

export const loadTasks = () => {
  return dispatch => {
    return TasksApi.getAllTasks()
      .then(tasks => dispatch(loadTasksSuccess(tasks)))
      .catch(error => {
        throw error;
      });
  };
};

export function createTask(task) {
  return dispatch => {
    return TasksApi.createTask(task)
      .then(task => {
        dispatch(createTaskSuccess(task));
        return task;
      })
      .catch(error => {
        throw error;
      });
  };
}

export function updateTask(task) {
  return dispatch => {
    return TasksApi.updateTask(task)
      .then(task => {
        dispatch(updateTaskSuccess(task));
        return task;
      })
      .catch(error => {
        throw error;
      });
  };
}

export function deleteTask(id) {
  return dispatch => {
    return TasksApi.deleteTask(id)
      .then(() => {
        dispatch(deleteTaskSuccess(id));
        return;
      })
      .catch(error => {
        throw error;
      });
  };
}
