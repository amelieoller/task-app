import React, { Component } from "react";
import { connect } from "react-redux";

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

  handleOnSubmit = e => {
    if (this.state.name) {
      if (e.which === 13 || e.target.type === "button") {
        this.props.createTask({ ...this.state });
        this.setState({ name: "", project_id: "", time: 25, priority: 4 });
      }
    }
  };

  handleBlur = e => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value);
    }
  };

  render() {
    return (
      <div className="input-group mb-3">
        <input
          placeholder="Create New Task"
          className="form-control"
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleOnChange}
          onKeyDown={this.handleOnSubmit}
        />
        <input
          placeholder="Minutes"
          className="form-control"
          type="number"
          name="time"
          value={this.state.time}
          onChange={this.handleOnChange}
          onKeyDown={this.handleOnSubmit}
        />

        <select
          onChange={e => {
            const project = this.props.projects.find(
              project => project.name === e.target.value
            );
            this.setState({
              project_id: project.id
            });
          }}
          className="custom-select"
        >
          <option />
          {this.props.projects.map(project => (
            <option key={project.id} value={project.name}>
              {project.name}
            </option>
          ))}
        </select>
        <select
          onChange={this.handleOnChange}
          className="custom-select"
          name="priority"
          value={this.state.priority}
        >
          <option />
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <div className="input-group-append">
          <button
            onClick={this.handleOnSubmit}
            className="btn btn-outline-secondary"
            type="button"
          >
            Submit
          </button>
        </div>
      </div>
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
