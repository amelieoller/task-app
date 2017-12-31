import React, { Component } from "react";
import { connect } from "react-redux";
import * as TaskActions from "../actions/taskActions";
import TaskList from "../components/TaskList";

import TaskForm from "../containers/TaskForm";
import { bindActionCreators } from "redux";

class TasksPage extends Component {
  render() {
    return (
      <div>
        <h2>Tasks</h2>
        <TaskForm createTask={this.props.actions.createTask} />
        <TaskList
          tasks={this.props.tasks}
          deleteTask={this.props.actions.deleteTask}
          updateTask={this.props.actions.updateTask}
          checkTask={this.props.actions.checkTask}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(TasksPage);
