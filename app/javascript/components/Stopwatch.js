import React, { Component } from 'react';
import Icon from 'material-ui/Icon';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import {
	FormControl,
	FormHelperText,
	FormGroup,
	FormControlLabel
} from 'material-ui/Form';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import Typography from 'material-ui/Typography';

const styles = theme => ({
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: '95%'
	},
	completed: {
		color: '#868e96'
	},
	root: {
		flexGrow: 1
	},
	timeInput: {
		'margin-bottom': '3px',
		'margin-top': '3px'
	},
	stopwatch: {
		'padding-left': '20px'
	},
	timeContainer: {
		'min-width': '70px'
	},
	timeFont: {
		'font-size': '13px',
		'padding-top': 0,
		'padding-bottom': 0
	},
	timeUnit: {
		'padding-left': '2px'
	},
	playPause: {
		'padding-left': '20px'
	}
});

class Stopwatch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			laps: [],
			text: '00:00',
			running: false,
			miliseconds: 0,
			seconds: 0,
			minutes: 0
		};
	}

	start = e => {
		if (!this.state.running) {
			this.setState({ running: true });
			this.watch = setInterval(() => this.step(), 10);
		}
		e.preventDefault();
	};

	stop = e => {
		this.setState({ running: false });
		clearInterval(this.watch);
		e.preventDefault();
	};

	step = () => {
		if (!this.state.running) return;
		this.calculate();
		this.print();
	};

	reset = e => {
		this.setState({
			minutes: 0,
			seconds: 0,
			miliseconds: 0,
			text: '00:00',
			laps: []
		});
		e.preventDefault();
	};

	print = () => {
		this.setState({ text: this.format() });
	};

	format = () => {
		return `${pad0(this.state.minutes)}:${pad0(this.state.seconds)}`;
	};

	calculate = () => {
		this.state.miliseconds += 1;
		if (this.state.miliseconds >= 100) {
			this.state.seconds += 1;
			this.state.miliseconds = 0;
		}
		if (this.state.seconds >= 60) {
			this.state.minutes += 1;
			this.state.seconds = 0;
		}
	};

	lap = e => {
		if (this.state.running) {
			this.setState({ laps: this.state.laps.concat(this.state.text) });
		}
		e.preventDefault();
	};

	render() {
		const { classes, task, time } = this.props;

		return (
			<div>
				<nav>
					{/* <button onClick={e => this.reset(e)}>reset</button>
					<button onClick={e => this.lap(e)}>lap</button> */}
				</nav>
				{/* <ul className="results">
					{this.state.laps.map(lapTime => <li>{lapTime}</li>)}
				</ul> */}

				<Grid item xs={1}>
					<FormControl
						className={
							(classes.formControl,
							classes.textField,
							classes.timeInput,
							'timeInput')
						}
					>
						<Grid
							container
							className={classes.timeContainer}
							direction="column"
							justify="center"
							alignItems="center"
						>
							{this.state.running ? (
								<Icon
									className={classes.playPause}
									onClick={e => this.stop(e)}
								>
									pause
								</Icon>
							) : (
								<Icon
									className={classes.playPause}
									onClick={e => this.start(e)}
								>
									play_arrow
								</Icon>
							)}

							{this.state.running ? (
								<Typography type="caption" className={classes.stopwatch}>
									{this.state.text}
								</Typography>
							) : (
								<Input
									className={classes.timeFont}
									id="timeFormInput"
									type="number"
									placeholder="Time"
									name="time"
									dir="rtl"
									title="Minutes"
									value={time}
									onChange={e => this.handleOnChange(e)}
									onBlur={e => this.handleOnBlur(e, task.id)}
									disableUnderline={true}
									startAdornment={
										<InputAdornment
											position="start"
											className={classes.timeUnit}
										>
											min
										</InputAdornment>
									}
								/>
							)}
						</Grid>
					</FormControl>
				</Grid>
			</div>
		);
	}
}

function pad0(value) {
	let result = value.toString();
	if (result.length < 2) {
		result = '0' + result;
	}
	return result;
}

var app = React.createElement(Stopwatch);

export default withStyles(styles)(Stopwatch);
