import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { NavLink } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Icon from 'material-ui/Icon';

import { connect } from 'react-redux';
import * as ProjectActions from '../actions/projectActions';
import ProjectList from '../components/ProjectList';

import ProjectForm from '../containers/ProjectForm';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const styles = {
	list: {
		width: 250
	},
	listFull: {},
	root: {
		width: '100%',
		maxWidth: 360,
		margin: '25px 16px',
		width: '90%'
	},
	projectList: {
		paddingTop: '10px'
	}
};

class ToggleDrawer extends React.Component {
	state = {
		left: false
	};

	toggleDrawer = (side, open) => () => {
		this.setState({
			[side]: open
		});
	};

	render() {
		const { classes } = this.props;
		return (
			<div>
				{/* <List>
					<ListItem component={NavLink} to="/tasks" button>
						<ListItemIcon>
							<Icon>check</Icon>
						</ListItemIcon>
						<ListItemText primary="Tasks" />
					</ListItem>
					<ListItem component={NavLink} to="/projects" button>
						<ListItemIcon>
							<Icon>done_all</Icon>
						</ListItemIcon>
						<ListItemText primary="Projects" />
					</ListItem>
				</List>
				<Divider /> */}

				<div className={classes.root}>
					<Typography type="headline" color="inherit">
						Projects
					</Typography>
					<ProjectList
						projects={this.props.projects}
						deleteProject={this.props.actions.deleteProject}
						updateProject={this.props.actions.updateProject}
						checkProject={this.props.actions.checkProject}
					/>
				</div>
				<Divider />
				<div className={classes.root}>
					<Typography type="headline" color="inherit">
						New Project
					</Typography>
					<ProjectForm createProject={this.props.actions.createProject} />
				</div>
			</div>
		);
	}
}

ToggleDrawer.propTypes = {
	classes: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		projects: state.projects
	};
}

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(ProjectActions, dispatch)
});

export default compose(
	withStyles(styles),
	connect(mapStateToProps, mapDispatchToProps)
)(ToggleDrawer);
