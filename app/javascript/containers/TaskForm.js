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
    e.preventDefault();
    this.props.addTask({ ...this.state });
    this.setState({ name: "" });
  };

  render() {
    return (
      <div className="row">
        <div className="col-6">
          <form className="form-inline" onSubmit={e => this.handleOnSubmit(e)}>
            <div className="form-group mx-sm-2 mb-2">
              <input
                placeholder="Create New Task"
                className="form-control"
                type="text"
                name="name"
                value={this.state.name}
                onChange={e => this.handleOnChange(e)}
              />
            </div>
            <input type="submit" className="btn btn-primary mb-2" />
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
