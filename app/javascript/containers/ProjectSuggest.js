import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { MenuItem } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';
import compose from 'recompose/compose';

import * as ProjectActions from '../actions/projectActions';

function renderInput(inputProps) {
	const { classes, autoFocus, value, ref, ...other } = inputProps;

	return (
		<TextField
			className={classes.textField}
			margin="normal"
			value={value}
			label="Project"
			inputRef={ref}
			InputProps={{
				classes: {
					input: classes.input
				},
				onBlur,
				...other
			}}
		/>
	);
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
	const matches = match(suggestion.name, query);
	const parts = parse(suggestion.name, matches);

	return (
		<MenuItem selected={isHighlighted} component="div">
			<div>
				{parts.map((part, index) => {
					return part.highlight ? (
						<span key={String(index)} style={{ fontWeight: 300 }}>
							{part.text}
						</span>
					) : (
						<strong key={String(index)} style={{ fontWeight: 500 }}>
							{part.text}
						</strong>
					);
				})}
			</div>
		</MenuItem>
	);
}

function renderSuggestionsContainer(options) {
	const { containerProps, children } = options;

	return (
		<Paper {...containerProps} square>
			{children}
		</Paper>
	);
}

function getSuggestionValue(suggestion) {
	// if (suggestion.isAddNew) {
	//   this.props.actions.createProject({ name: this.state.value });
	//   this.props.handleProjectCreation(suggestion)
	//   return this.state.value;
	// }
	// this.props.handleProjectSuggest(suggestion.id)

	return suggestion.name;
}

function onBlur(event, { highlightedSuggestion }) {}

const styles = theme => ({
	container: {
		position: 'relative'
	},
	suggestionsContainerOpen: {
		position: 'absolute',
		marginTop: theme.spacing.unit,
		marginBottom: theme.spacing.unit * 3,
		left: 0,
		right: 0,
		'z-index': 1
	},
	suggestion: {
		display: 'block'
	},
	suggestionsList: {
		margin: 0,
		padding: 0,
		listStyleType: 'none'
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: '100%'
	}
});

class ProjectSuggest extends React.Component {
		state = {
			value: '',
			suggestions: []
		};

	getSuggestions = value => {
		const inputValue = value.trim().toLowerCase();
		const inputLength = inputValue.length;
		let count = 0;
		return inputLength === 0
			? this.props.projects.filter(suggestion => suggestion.name)
			: // ? [{ isAddNew: true }]
				this.props.projects.filter(suggestion => {
					const keep =
						count < 5 &&
						suggestion.name.toLowerCase().slice(0, inputLength) === inputValue;

					if (keep) {
						count += 1;
					}

					return keep;
				});
	};

	handleSuggestionsFetchRequested = ({ value }) => {
		this.setState({
			suggestions: this.getSuggestions(value)
		});
	};

	handleSuggestionsClearRequested = () => {
		this.setState({
			suggestions: []
		});
	};

	handleChange = (event, { newValue }) => {
		this.setState({
			value: newValue
		});
	};

	handleBlur = () => {
		const value = this.state.value;
		let id = '';

		this.props.projects.map(function(project) {
			if (project.name.toLowerCase() === value.toLowerCase()) {
				id = project.id;
				return id;
			}
		});
		
		id ? this.props.setProjectId(id) : this.props.createProjectFromTask(value);
	};

	render() {
		const { classes } = this.props;

		return (
			<Autosuggest
				theme={{
					container: classes.container,
					suggestionsContainerOpen: classes.suggestionsContainerOpen,
					suggestionsList: classes.suggestionsList,
					suggestion: classes.suggestion
				}}
				renderInputComponent={renderInput}
				suggestions={this.state.suggestions}
				onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
				onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
				renderSuggestionsContainer={renderSuggestionsContainer}
				getSuggestionValue={getSuggestionValue}
				renderSuggestion={renderSuggestion}
				onSuggestionSelected={this.clearInput}
				shouldRenderSuggestions={() => true}
				inputProps={{
					classes,
					placeholder: 'Enter a Project',
					onBlur: this.handleBlur,
					value: this.state.value,
					onChange: this.handleChange
				}}
			/>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(ProjectActions, dispatch)
});

ProjectSuggest.propTypes = {
	classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles), connect(null, mapDispatchToProps))(
	ProjectSuggest
);
