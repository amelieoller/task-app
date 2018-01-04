import React, { Component } from "react";
import { connect } from "react-redux";
import * as ProjectActions from "../actions/projectActions";
import ProjectList from "../components/ProjectList";

import ProjectForm from "../containers/ProjectForm";
import { bindActionCreators } from "redux";

class ProjectsPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <h2>Projects</h2>
          <ProjectForm createProject={this.props.actions.createProject} />
          <ProjectList
            projects={this.props.projects}
            deleteProject={this.props.actions.deleteProject}
            updateProject={this.props.actions.updateProject}
            checkProject={this.props.actions.checkProject}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    projects: state.projects
  };
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ProjectActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);
