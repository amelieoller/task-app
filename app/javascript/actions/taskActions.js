import * as types from './actionTypes';
import TasksApi from '../api/TasksApi';

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

export function checkTaskSuccess(task) {
	return { type: types.CHECK_TASK_SUCCESS, task };
}

const dispatchRequest = (apiRequest, action) => {
	return dispatch => {
		return apiRequest
			.then(tasks => {
				return dispatch(action(tasks));
			})
			.catch(error => {
				throw error;
			});
	};
};

export const loadTasks = () => {
	return dispatchRequest(TasksApi.getAllTasks(), loadTasksSuccess);
};

export function createTask(task) {
	return dispatch => {
		return TasksApi.createTask(task)
			.then(() => {
				dispatch(createTaskSuccess(task));
			})
			.catch(error => {
				throw error;
			});
	};
}

export function updateTask(task) {
	return dispatchRequest(TasksApi.updateTask(task), updateTaskSuccess);
}

export function deleteTask(id) {
	return dispatch => {
		return TasksApi.deleteTask(id)
			.then(() => {
				dispatch(deleteTaskSuccess(id));
			})
			.catch(error => {
				throw error;
			});
	};
}

export function checkTask(task) {
	return dispatchRequest(TasksApi.updateTask(task), checkTaskSuccess);
}
