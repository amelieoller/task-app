import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectSuggest from './ProjectSuggest';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Done from 'material-ui-icons/Done';
import Grid from 'material-ui/Grid';
import {
	FormControl,
	FormHelperText,
	FormGroup,
	FormControlLabel
} from 'material-ui/Form';
import Select from 'material-ui/Select';

import compose from 'recompose/compose';

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: '100%'
	},
	button: {
		margin: theme.spacing.unit,
		'margin-bottom': 0
	},
	root: {
		flexGrow: 1
	}
});

class TaskForm extends Component {
	state = {
		name: '',
		project_id: '',
		time: '',
		priority: '',
		new_project_name: ''
	};

	handleOnChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	handleProjectSuggest = id => {
		this.setState({
			project_id: id
		});
	};

	handleOnSubmit = e => {
		if (this.state.name) {
			if (e.which === 13 || e.currentTarget.type === 'button') {
				this.props.createTask({
					name: this.state.name,
					project_id: this.state.project_id,
					time: this.state.time,
					priority: this.state.priority ? this.state.priority : 3,
					project_name: this.state.new_project_name
				});
				this.setState({ name: '', project_id: '', time: '', priority: '' });
			}
		}
	};

	setProjectId = id => {
		this.setState({
			project_id: id
		});
	};

	createProjectFromTask = name => {
		this.setState({new_project_name: name})
	}

	render() {
		const { classes, autoFocus } = this.props;
		return (
			<div className={classes.root}>
				<form className={classes.container} noValidate autoComplete="off">
					<Grid container spacing={8} alignItems="center">
						{/* Task Name Input */}
						<Grid item xs>
							<TextField
								autoFocus={true}
								id="taskFormInput"
								label="New Task"
								placeholder="Enter a Task Name"
								className={classes.textField}
								margin="normal"
								name="name"
								value={this.state.name}
								onChange={this.handleOnChange}
								onKeyDown={this.handleOnSubmit}
							/>
						</Grid>

						{/* Time Input */}
						<Grid item xs={2}>
							<TextField
								id="timeFormInput"
								type="number"
								label="Minutes"
								placeholder="Time"
								className={classes.textField}
								margin="normal"
								name="time"
								title="Minutes"
								value={this.state.time}
								onChange={this.handleOnChange}
								onKeyDown={this.handleOnSubmit}
							/>
						</Grid>

						{/* Project Select */}
						<Grid item xs={2}>
							<ProjectSuggest
								projects={this.props.projects}
								setProjectId={this.setProjectId}
								createProjectFromTask={this.createProjectFromTask}
							/>
						</Grid>

						{/* Priority Select */}
						<Grid item xs={2}>
							<TextField
								id="prioritySelect"
								select
								label="Priority"
								className={classes.textField}
								name="priority"
								value={this.state.priority}
								onChange={this.handleOnChange}
								SelectProps={{
									MenuProps: {
										className: classes.menu
									}
								}}
								margin="normal"
							>
								{[1, 2, 3].map(option => (
									<MenuItem key={option} value={option}>
										{option}
									</MenuItem>
								))}
							</TextField>
						</Grid>

						{/* Submit button */}
						<Grid item>
							<Button
								className={classes.button}
								raised
								color="contrast"
								onClick={this.handleOnSubmit}
							>
								<Done className={classes.leftIcon} />
								Done
							</Button>
						</Grid>
					</Grid>
				</form>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		tasks: state.tasks,
		projects: state.projects
	};
}

export default compose(withStyles(styles), connect(mapStateToProps))(TaskForm);
