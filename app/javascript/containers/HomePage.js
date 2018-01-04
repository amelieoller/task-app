import React, { Component } from "react";
import { connect } from "react-redux";
import * as TaskActions from "../actions/taskActions";
import { bindActionCreators } from "redux";

import ProjectsPage from "./ProjectsPage";
import TasksPage from "./TasksPage";
// import Container from "../drag/Container";
import TestInput from "./TestInput";

class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>Welcome To your Todo App</h1>
        </div>
        <div className="row">
          <div className="col">
            <TasksPage />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    tasks: state.tasks
  };
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TaskActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
