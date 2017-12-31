import React, { Component } from "react";

class TaskItem extends Component {
  constructor(props) {
    super(props);

    const { name, id, completed } = this.props.task;

    this.state = {
      name: name || "",
      id: id,
      editing: false,
      completed: completed || false
    };
  }

  handleOnClick = id => {
    this.props.deleteTask(id);
  };

  handleOnChange = e => {
    this.setState({
      name: e.target.value,
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

  handleOnCheck = e => {
    const checked = e.target.checked;
    this.setState({
      completed: checked
    });
    this.props.checkTask({ id: this.props.task.id, completed: checked });
  };

  render() {
    const { task } = this.props;
    return (
      <li className="list-group-item d-flex justify-content-start align-items-center">
        <div className="round p-2" title="Mark as Complete">
          <input
            type="checkbox"
            checked={task.completed}
            id={`checkbox_${task.id}`}
            onChange={e => this.handleOnCheck(e)}
          />
          <label htmlFor={`checkbox_${task.id}`} />
        </div>
        <div className="p-0 large-input">
          <input
            className={
              this.state.completed
                ? "remove-input-border item-completed"
                : "remove-input-border"
            }
            type="text"
            value={this.state.name}
            onChange={e => this.handleOnChange(e)}
            onBlur={e => this.handleOnBlur(e, task.id)}
          />
        </div>
        <div
          title="Delete"
          onClick={() => this.handleOnClick(task.id)}
          className="badge badge-default badge-pill ml-auto p-0 delete-button"
        >
          X
        </div>
      </li>
    );
  }
}

export default TaskItem;
