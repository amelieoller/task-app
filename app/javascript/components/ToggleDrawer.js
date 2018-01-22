import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { NavLink } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = {
	list: {
		width: 250
	},
	listFull: {
		width: 'auto'
	},
	root: {
		width: '100%',
		maxWidth: 360
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

		return (
			<div>
				<List>
					<ListItem component={NavLink} to="/projects" button>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary="Projects" />
					</ListItem>
					<ListItem component={NavLink} to="/tasks" button>
						<ListItemIcon>
							<DraftsIcon />
						</ListItemIcon>
						<ListItemText primary="Tasks" />
					</ListItem>
				</List>
				<Divider />
			</div>
		);
	}
}

ToggleDrawer.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ToggleDrawer);
