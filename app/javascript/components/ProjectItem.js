import React, { Component } from "react";
import Octicon from "react-octicon";

class ProjectItem extends Component {
  constructor(props) {
    super(props);

    const { name, id, completed } = this.props.project;

    this.state = {
      name: name || "",
      id: id,
      editing: false,
      completed: completed || false
    };
  }

  handleOnClick = id => {
    this.props.deleteProject(id);
  };

  handleOnChange = e => {
    this.setState({
      name: e.target.value,
      editing: true
    });
  };

  handleOnBlur = e => {
    if (this.state.editing) {
      this.props.updateProject({ ...this.state });
      this.setState({
        editing: false
      });
    }
  };

  handleOnCheck = e => {
    const checked = e.target.checked;
    this.setState({
      completed: checked
    });
    this.props.checkProject({ id: this.props.project.id, completed: checked });
  };

  render() {
    const { project } = this.props;
    const { name } = this.state;

    return (
      <form className="form-row align-items-center">
        {/* Move Project */}
        <div className="col-auto mr-2">
          <Octicon name="three-bars" />
        </div>

        {/* Checkbox */}
        <div className="round p-2 col-auto mr-3">
          <input
            type="checkbox"
            className="form-control"
            checked={project.completed}
            id={`task_checkbox_${project.id}`}
            onChange={e => this.handleOnCheck(e)}
          />
          <label htmlFor={`task_checkbox_${project.id}`} />
        </div>

        {/* Project Name */}
        <div className="col">
          <label className="sr-only" htmlFor="taskNameInput">
            Task Name
          </label>
          <input
            type="text"
            className={
              project.completed
                ? "item-completed form-control remove-input-border"
                : "form-control remove-input-border"
            }
            id="taskNameInput"
            placeholder="Task Name"
            name="name"
            value={name}
            onChange={e => this.handleOnChange(e)}
            onBlur={e => this.handleOnBlur(e, project.id)}
          />
        </div>

        {/* Delete */}
        <div
          className="col-auto form-control-static add-pointer"
          onClick={() => this.handleOnClick(project.id)}
        >
          <Octicon name="x" />
        </div>
      </form>
    );
  }
}

export default ProjectItem;
