import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Typography from 'material-ui/Typography';

import * as TaskActions from '../actions/taskActions';
import TaskList from '../components/TaskList';
import TaskForm from '../containers/TaskForm';

class TasksPage extends Component {
	render() {
		return (
			<div>
				<Typography type="display2" gutterBottom>
					Tasks{' '}
				</Typography>
				<TaskForm createTask={this.props.actions.createTask} />
				<TaskList
					tasks={this.props.tasks}
					deleteTask={this.props.actions.deleteTask}
					updateTask={this.props.actions.updateTask}
					checkTask={this.props.actions.checkTask}
				/>
			</div>
		);
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

export default connect(mapStateToProps, mapDispatchToProps)(TasksPage);
