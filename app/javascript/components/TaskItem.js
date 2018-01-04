import React, { Component } from "react";
import { connect } from "react-redux";
import Octicon from "react-octicon";

class TaskItem extends Component {
  constructor(props) {
    super(props);

    const { name, id, completed, project_id, time, priority } = this.props.task;

    this.state = {
      name: name || "",
      id: id,
      editing: false,
      completed: completed || false,
      project_id: project_id || "",
      time: time || "",
      priority: priority || 4
    };
  }

  handleOnClick = id => {
    this.props.deleteTask(id);
  };

  handleOnChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      editing: true
    });
  };

  handleOnBlur = e => {
    if (this.state.editing) {
      this.props.updateTask({ ...this.state });
      this.setState({
        editing: false
      });
    }
  };

  handleOnCheck = (e, id) => {
    const checked = e.target.checked;
    this.setState({
      completed: checked
    });
    this.props.checkTask({ id: id, completed: checked });
  };

  render() {
    const { task } = this.props;
    const { name, time } = this.state;

    return (
      <form className="form-row align-items-center">
        {/* Move Task */}
        <div className="col-auto mr-2">
          <Octicon name="three-bars" />
        </div>

        {/* Checkbox */}
        <div className="round p-2 col-auto mr-3">
          <input
            type="checkbox"
            className="form-control"
            checked={task.completed}
            id={`task_checkbox_${task.id}`}
            onChange={e => this.handleOnCheck(e, this.state.id)}
          />{" "}
          <label htmlFor={`task_checkbox_${task.id}`} />
        </div>

        {/* Task Name */}
        <div className="col">
          <label className="sr-only" htmlFor="taskNameInput">
            Task Name
          </label>
          <input
            type="text"
            className={
              task.completed
                ? "item-completed form-control remove-input-border"
                : "form-control remove-input-border"
            }
            id="taskNameInput"
            placeholder="Task Name"
            name="name"
            value={name}
            onChange={e => this.handleOnChange(e)}
            onBlur={e => this.handleOnBlur(e, task.id)}
          />
        </div>

        {/* Minutes */}
        <div className="col-auto">
          <label className="sr-only" htmlFor="timeInput">
            Minutes
          </label>
          <input
            type="number"
            className="form-control remove-input-border"
            id="timeInput"
            placeholder="Minutes"
            name="time"
            value={time}
            onChange={e => this.handleOnChange(e)}
            onBlur={e => this.handleOnBlur(e, task.id)}
          />
        </div>

        {/* Projects */}
        <div className="col-md-3 col-2">
          <label className="sr-only" htmlFor="projectSelect">
            Project
          </label>
          <select
            className="form-control remove-input-border add-pointer"
            id="projectSelect"
            name="project_id"
            onChange={e => this.handleOnChange(e)}
            onBlur={e => this.handleOnBlur(e, task.id)}
            value={this.state.project_id}
          >
            {this.props.projects.map(project => (
              <option key={`project_${project.id}`} value={project.id}>
                {project.name}
              </option>
            ))}
          </select>
        </div>

        {/* Priorities */}
        <div className="col-auto">
          <label className="sr-only" htmlFor="prioritySelect">
            Priority
          </label>
          <select
            className="form-control remove-input-border add-pointer"
            id="prioritySelect"
            name="priority"
            onChange={e => this.handleOnChange(e)}
            onBlur={e => this.handleOnBlur(e, task.id)}
            value={this.state.priority}
          >
            {[1, 2, 3, 4].map(priority => (
              <option key={`priority_${priority}`} value={priority}>
                {priority}
              </option>
            ))}
          </select>
        </div>

        {/* Delete */}
        <div
          className="col-auto form-control-static add-pointer"
          onClick={() => this.handleOnClick(task.id)}
        >
          <Octicon name="x" />
        </div>
      </form>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    projects: state.projects
  };
}

export default connect(mapStateToProps)(TaskItem);
