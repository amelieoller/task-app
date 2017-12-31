import * as types from "./actionTypes";
import ProjectsApi from "../api/ProjectsApi";

export function loadProjectsSuccess(projects) {
  return { type: types.LOAD_PROJECTS_SUCCESS, projects };
}

export function createProjectSuccess(project) {
  return { type: types.CREATE_PROJECT_SUCCESS, project };
}

export function updateProjectSuccess(project) {
  return { type: types.UPDATE_PROJECT_SUCCESS, project };
}

export function deleteProjectSuccess(id) {
  return { type: types.DELETE_PROJECT_SUCCESS, id };
}

export function checkProjectSuccess(project) {
  return { type: types.CHECK_PROJECT_SUCCESS, project };
}

const dispatchRequest = (apiRequest, action) => {
  return dispatch => {
    return apiRequest
      .then(projects => {
        return dispatch(action(projects));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const loadProjects = () => {
  return dispatchRequest(ProjectsApi.getAllProjects(), loadProjectsSuccess);
};

export function createProject(project) {
  return dispatchRequest(ProjectsApi.createProject(project), createProjectSuccess);
}

export function updateProject(project) {
  return dispatchRequest(ProjectsApi.updateProject(project), updateProjectSuccess);
}

export function deleteProject(id) {
  return dispatch => {
    return ProjectsApi.deleteProject(id)
      .then(() => {
        dispatch(deleteProjectSuccess(id));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function checkProject(project) {
  return dispatchRequest(ProjectsApi.updateProject(project), checkProjectSuccess);
}