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

  render() {
    return (
      <form className="form-row align-items-center">
        <div className="col">
          <label className="sr-only" htmlFor="projectFormInput">
            New Project
          </label>
          <input
            type="text"
            className="form-control"
            id="projectFormInput"
            placeholder="Create New Project"
            name="name"
            value={this.state.name}
            onChange={this.handleOnChange}
            onKeyDown={this.handleOnSubmit}
          />
        </div>
      </form>
    );
  }
}

export default ProjectForm;
