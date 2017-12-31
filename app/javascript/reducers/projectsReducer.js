import * as types from "../actions/actionTypes";
import projectInitalState from "./projectInitalState";

export default function projectsReducer(state = projectInitalState, action) {
  switch (action.type) {
    case types.LOAD_PROJECTS_SUCCESS:
      return action.projects;
    case types.CREATE_PROJECT_SUCCESS:
      return [
        ...state,
        {
          id: action.project.id,
          completed: false,
          name: action.project.name
        }
      ];
    case types.UPDATE_PROJECT_SUCCESS:
      return state.map(
        project =>
          project.id === action.project.id
            ? Object.assign({}, ...project, action.project)
            : project
      );
    case types.DELETE_PROJECT_SUCCESS:
      return state.filter(project => project.id !== action.id);
    case types.CHECK_PROJECT_SUCCESS:
      return state.map(
        project =>
          project.id === action.project.id
            ? { ...project, completed: !project.completed }
            : project
      );
    default:
      return state;
  }
}
