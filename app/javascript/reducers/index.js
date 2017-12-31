import { combineReducers } from "redux";

import tasks from "./tasksReducer";
import projects from "./projectsReducer";

export default combineReducers({
  tasks,
  projects
});
