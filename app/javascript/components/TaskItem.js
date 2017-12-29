import React, { Component } from "react";

class TaskItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.task.name || "",
      id: this.props.task.id,
      editing: false
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

  handleOnBlur = (e, id) => {
    if (this.state.editing) {
      this.props.updateTask({ ...this.state });
      this.setState({
        editing: false
      });
    }
  };

  render() {
    const { task } = this.props;
    return (
      <div className="col-12">
        <div className="input-group mb-3">
          <input
            type="text"
            value={this.state.name}
            onChange={e => this.handleOnChange(e)}
            onBlur={e => this.handleOnBlur(e, task.id)}
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.handleOnClick(task.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskItem;
