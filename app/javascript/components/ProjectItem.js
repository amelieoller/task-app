import React, { Component } from 'react';
import Octicon from 'react-octicon';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import {
	FormControl,
	FormHelperText,
	FormGroup,
	FormControlLabel
} from 'material-ui/Form';
import Icon from 'material-ui/Icon';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import IconButton from 'material-ui/IconButton';

const styles = theme => {
	project: {
		padding: '0 16px';
	}
};

class ProjectItem extends Component {
	constructor(props) {
		super(props);

		const { name, id, completed } = this.props.project;

		this.state = {
			name: name || '',
			id: id,
			editing: false,
			completed: completed || false
		};
	}

	handleOnClick = id => {
		this.props.deleteProject(id);
	};

	handleOnChange = e => {
		this.setState({
			name: e.target.value,
			editing: true
		});
	};

	handleOnBlur = e => {
		if (this.state.editing) {
			this.props.updateProject({ ...this.state });
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
		this.props.checkProject({ id: this.props.project.id, completed: checked });
	};

	render() {
		const { classes, project } = this.props;
		const { name } = this.state;

		return (
			<Grid
				container
				direction="row"
				alignItems="center"
				justify="center"
				spacing={0}
			>
				{/* Checkbox */}
				{/* <div className="round p-2 col-auto mr-3">
          <input
            type="checkbox"
            className="form-control"
            checked={project.completed}
            id={`task_checkbox_${project.id}`}
            onChange={e => this.handleOnCheck(e)}
          />
          <label htmlFor={`task_checkbox_${project.id}`} />
        </div> */}

				{/* Project Name */}
				<Grid item xs>
					<Input
						disableUnderline={true}
						type="text"
						id="taskNameInput"
						placeholder="Task Name"
						name="name"
						value={name}
						onChange={e => this.handleOnChange(e)}
						onBlur={e => this.handleOnBlur(e, project.id)}
					/>
				</Grid>

				{/* Delete */}
				<Grid item>
					<IconButton onClick={() => this.handleOnClick(project.id)}>
						<Icon>delete</Icon>
					</IconButton>
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(ProjectItem);
