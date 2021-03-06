import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as TaskActions from '../actions/taskActions';
import { bindActionCreators } from 'redux';

import ProjectsPage from './ProjectsPage';
import TasksPage from './TasksPage';

class HomePage extends Component {
	render() {
		return <TasksPage />;
	}
}

function mapStateToProps(state, ownProps) {
	return {
		tasks: state.tasks
	};
}

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(TaskActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
