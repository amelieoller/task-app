import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import NavBar from '../components/NavBar';
import HomePage from '../containers/HomePage';
import TasksPage from '../containers/TasksPage';
import ProjectsPage from '../containers/ProjectsPage';
import * as TaskActions from '../actions/taskActions';

import withStyles from 'material-ui/styles/withStyles';
import React, { Component } from 'react';

const styles = theme => ({
	content: {
		backgroundColor: theme.palette.background.default,
		width: '100%',
		padding: theme.spacing.unit * 3,
		height: 'calc(100% - 56px)',
		marginTop: 56,
		[theme.breakpoints.up('sm')]: {
			height: 'calc(100% - 64px)',
			marginTop: 64
		}
	}
});

class App extends Component {
	render() {
		const { classes } = this.props;

		return (
			<Router>
				<NavBar>
					<main className={classes.content}>
						<Route exact path="/" component={HomePage} />
						<Route path="/tasks" component={TasksPage} />
						<Route path="/projects" component={ProjectsPage} />
					</main>
				</NavBar>
			</Router>
		);
	}
}

export default withStyles(styles)(App);
