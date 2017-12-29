import React, { Component } from "react";

class TaskForm extends Component {
  state = {
    name: ""
  };

  handleOnChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleOnSubmit = e => {
    if (e.which === 13) {
      this.props.createTask({ ...this.state });
      this.setState({ name: "" });
    }
  };

  handleBlur = e => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value);
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col-6">
          <input
            placeholder="Create New Task"
            className="form-control"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleOnChange}
            onKeyDown={this.handleOnSubmit}
          />
        </div>
      </div>
    );
  }
}

export default TaskForm;
