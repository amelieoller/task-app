import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';
import ToggleDrawer from './ToggleDrawer';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

const styles = theme => ({
	root: {
		width: '100%',
		// height: 430,
		marginTop: theme.spacing.unit * 3,
		zIndex: 1,
		overflow: 'hidden'
	},
	appFrame: {
		position: 'relative',
		display: 'flex',
		width: '100%',
		height: '100%'
	},
	appBar: {
		position: 'absolute',
		marginLeft: drawerWidth,
		[theme.breakpoints.up('md')]: {
			width: `calc(100% - ${drawerWidth}px)`
		}
	},
	navIconHide: {
		[theme.breakpoints.up('md')]: {
			display: 'none'
		}
	},
	drawerHeader: theme.mixins.toolbar,
	drawerPaper: {
		width: 250,
		[theme.breakpoints.up('md')]: {
			width: drawerWidth,
			position: 'relative',
			height: '100%'
		}
	}
});

class NavBar extends React.Component {
	state = {
		mobileOpen: false
	};

	handleDrawerToggle = () => {
		this.setState({ mobileOpen: !this.state.mobileOpen });
	};

	render() {
		const { classes, theme } = this.props;

		const drawer = (
			<div>
				<div className={classes.drawerHeader} />
				<Divider />
				<ToggleDrawer />
			</div>
		);

		return (
			<div className={classes.root}>
				<div className={classes.appFrame}>
					<AppBar className={classes.appBar}>
						<Toolbar>
							<IconButton
								color="contrast"
								aria-label="open drawer"
								onClick={this.handleDrawerToggle}
								className={classes.navIconHide}
							>
								<MenuIcon />
							</IconButton>
							<Typography type="title" color="inherit" noWrap className={classes.flex} component={NavLink} to='/'>
								Task App
							</Typography>
						</Toolbar>
					</AppBar>
					<Hidden mdUp>
						<Drawer
							type="temporary"
							anchor={theme.direction === 'rtl' ? 'right' : 'left'}
							open={this.state.mobileOpen}
							classes={{
								paper: classes.drawerPaper
							}}
							onClose={this.handleDrawerToggle}
							ModalProps={{
								keepMounted: true // Better open performance on mobile.
							}}
						>
							{drawer}
						</Drawer>
					</Hidden>
					<Hidden smDown implementation="css">
						<Drawer
							type="permanent"
							open
							classes={{
								paper: classes.drawerPaper
							}}
						>
							{drawer}
						</Drawer>
					</Hidden>
					{this.props.children}
				</div>
			</div>
		);
	}
}

NavBar.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(NavBar);
