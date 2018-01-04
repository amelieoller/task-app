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
      <form className="form-inline">
        {/* Move Task */}
        <div className="col-12 col-sm-auto form-control-static">
          <Octicon name="three-bars" />
        </div>

        {/* Checkbox */}
        <div className="round p-2">
          <input
            type="checkbox"
            className="form-control col-12 col-sm-auto mb-2 mr-sm-2 mb-sm-0"
            checked={task.completed}
            id={`task_checkbox_${task.id}`}
            onChange={e => this.handleOnCheck(e, this.state.id)}
          />{" "}
          <label htmlFor={`task_checkbox_${task.id}`} />
        </div>

        {/* Task Name */}
        <label className="sr-only" htmlFor="taskNameInput">
          Task Name
        </label>
        <input
          type="text"
          className={
            task.completed
              ? "item-completed col form-control mb-2 mr-sm-2 mb-sm-0 remove-input-border"
              : "col form-control mb-2 mr-sm-2 mb-sm-0 remove-input-border"
          }
          id="taskNameInput"
          placeholder="Task Name"
          name="name"
          value={name}
          onChange={e => this.handleOnChange(e)}
          onBlur={e => this.handleOnBlur(e, task.id)}
        />

        {/* Minutes */}
        <label className="sr-only" htmlFor="timeInput">
          Minutes
        </label>
        <input
          type="number"
          className="form-control mb-2 mr-sm-2 mb-sm-0 col-12 col-sm-auto remove-input-border"
          id="timeInput"
          placeholder="Minutes"
          name="time"
          value={time}
          onChange={e => this.handleOnChange(e)}
          onBlur={e => this.handleOnBlur(e, task.id)}
        />

        {/* Projects */}
        <label className="sr-only" htmlFor="projectSelect">
          Project
        </label>
        <select
          className="form-control mb-2 mr-sm-2 mb-sm-0 col-12 col-sm-auto remove-input-border  add-pointer"
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

        {/* Priorities */}
        <label className="sr-only" htmlFor="prioritySelect">
          Priority
        </label>
        <select
          className="form-control mb-2 mr-sm-2 mb-sm-0 col-12 col-sm-auto remove-input-border add-pointer"
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

        {/* Delete */}
        <div
          className="col-12 col-sm-auto form-control-static add-pointer"
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
