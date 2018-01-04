import React, { Component } from "react";
import { connect } from "react-redux";
import ProjectSuggest from "./ProjectSuggest";

class TaskForm extends Component {
  state = {
    name: "",
    project_id: "",
    time: 25,
    priority: 4
  };

  handleOnChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleProjectSuggest = id => {
    this.setState({
      project_id: id
    });
  };

  handleProjectCreation = newProject => {
    console.log(newProject);
  };

  handleOnSubmit = e => {
    if (this.state.name) {
      if (e.which === 13 || e.target.type === "button") {
        this.props.createTask({ ...this.state });
        this.setState({ name: "", project_id: "", time: 25, priority: 4 });
      }
    }
  };

  render() {
    return (
      <form className="form-row align-items-center">
        {/* Task Name Input */}
        <div className="col">
          <label className="sr-only" htmlFor="taskFormInput">
            New Task
          </label>
          <input
            type="text"
            className="form-control mb-2"
            id="taskFormInput"
            placeholder="Create New Task"
            name="name"
            title="Task Name"
            value={this.state.name}
            onChange={this.handleOnChange}
            onKeyDown={this.handleOnSubmit}
          />
        </div>

        {/* Time Input */}
        <div className="col-lg-1 col-2">
          <label className="sr-only" htmlFor="timeFormInput">
            Minutes
          </label>
          <input
            type="number"
            className="form-control mb-2"
            id="timeFormInput"
            placeholder="Minutes"
            name="time"
            title="Minutes"
            value={this.state.time}
            onChange={this.handleOnChange}
            onKeyDown={this.handleOnSubmit}
          />
        </div>

        {/* Project Select */}
        <div className="col-auto">
          <div className="mb-2">
            <ProjectSuggest
              projects={this.props.projects}
              handleProjectSuggest={this.handleProjectSuggest}
              handleProjectCreation={this.handleProjectCreation}
            />
          </div>
        </div>

        {/* Priority Select */}
        <div className="col-auto">
          <select
            className="custom-select mb-2"
            name="priority"
            title="Priority"
            value={this.state.priority}
            onChange={this.handleOnChange}
          >
            <option />
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        <div className="col-auto">
          <button
            type="button"
            className="btn btn-default mb-2"
            onClick={this.handleOnSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    tasks: state.tasks,
    projects: state.projects
  };
}

export default connect(mapStateToProps)(TaskForm);
