import React, { Component } from "react";

class ProjectForm extends Component {
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
      this.props.createProject({ ...this.state });
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
        <div className="col-12 mb-3">
          <input
            placeholder="Create New Project"
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

export default ProjectForm;
