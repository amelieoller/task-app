import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import {
	FormControl,
	FormHelperText,
	FormGroup,
	FormControlLabel
} from 'material-ui/Form';
import TextField from 'material-ui/TextField';

const styles = theme => {
	root: {
		flexGrow: 1;
	}
};

class ProjectForm extends Component {
	state = {
		name: ''
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
			this.setState({ name: '' });
		}
	};

	render() {
		const { classes } = this.props;

		return (
			<Grid container direction="column">
				<Grid item>
					<TextField
						id="projectFormInput"
						label="New Project"
						placeholder="Create New Project"
						margin="normal"
						name="name"
						value={this.state.name}
						onChange={this.handleOnChange}
						onKeyDown={this.handleOnSubmit}
					/>
				</Grid>
			</Grid>
		);
	}
}

export default ProjectForm;
