import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import NavBar from "../components/NavBar";
import TaskForm from "../containers/TaskForm";
import TasksPage from "../containers/TasksPage";
import * as TaskActions from "../actions/taskActions";

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={TasksPage} />
      <Route path="/tasks" component={TasksPage} />
    </div>
  </Router>
);

export default App;
