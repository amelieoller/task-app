import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import NavBar from "../components/NavBar";
import TaskForm from "../containers/TaskForm";
import TasksPage from "../containers/TasksPage";
import * as TaskActions from "../actions/taskActions";

const App = ({ tasks, actions }) => (
  <Router>
    <div>
      <NavBar />
      <Route
        exact
        path="/"
        render={() => (
          <div className="container">
            <TasksPage />
          </div>
        )}
      />
      <Route path="/tasks" component={TasksPage} />
    </div>
  </Router>
);

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TaskActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
