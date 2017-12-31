import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import NavBar from "../components/NavBar";
import HomePage from "../containers/HomePage";
import TasksPage from "../containers/TasksPage";
import ProjectsPage from "../containers/ProjectsPage";
import * as TaskActions from "../actions/taskActions";

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={HomePage} />
      <Route path="/tasks" component={TasksPage} />
      <Route path="/projects" component={ProjectsPage} />
    </div>
  </Router>
);

export default App;
