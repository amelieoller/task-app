import React from 'react';
import Grid from 'material-ui/Grid';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
	timeFont: {
		'font-size': '13px'
	},
	timeUnit: {
		'padding-left': '2px',
		float: 'left'
	}
});

class TimeInput extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const timeWidth = () => {
			const { time } = this.props;
			if (time.toString().length == 1) {
				return { width: '8px' };
			} else if (time.toString().length == 2) {
				return { width: '15px' };
			} else if (time.toString().length == 3) {
				return { width: '22px' };
			} else if (time.toString().length > 3) {
				return { width: '46px' };
			} else {
				return { width: '46px', fontStyle: 'italic', fontSize: '12px' };
			}
		};

		const { classes, task, time } = this.props;

		return (
			<Grid
				item
				container
				direction="row"
				justify="center"
				alignItems="center"
				style={{ padding: 0 }}
			>
				<Input
					className={classes.timeFont}
					style={timeWidth()}
					id="timeFormInput"
					name="time"
					type="number"
					value={time}
					placeholder="No Time"
					disableUnderline={true}
					onChange={e => this.props.handleOnChange(e)}
					onBlur={e => this.props.handleOnBlur(e, task.id)}
				/>
				{time ? (
					<Typography type="caption" className={classes.timeUnit}>
						min
					</Typography>
				) : (
					''
				)}
			</Grid>
		);
	}
}
export default withStyles(styles)(TimeInput);
