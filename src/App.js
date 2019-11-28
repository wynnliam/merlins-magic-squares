import React from 'react';
import logo from './logo.svg';
import './App.css';

function Square(props) {
	return(
		<button className="square">
			.
		</button>
	);
}

class Board extends React.Component {
	constructor(props) {
		super(props);
	}

	renderSquare(i) {
		return(<Square 
			isActive = {this.props.squareStates[i]}
		/>);
	}

	render() {
		return(
			<div>
				<div className="board-row">
					{this.renderSquare(0)}
					<Square />
					<Square />
				</div>
				<div className="board-row">
					<Square />
					<Square />
					<Square />
				</div>
				<div className="board-row">
					<Square />
					<Square />
					<Square />
				</div>
			</div>
		);
	}
}

class Game extends React.Component {
	constructor(props) {
		super(props);

		// A fancy way of generating an array of nine random floats between 0 and 1,
		// and saying the ones > 0.5 are true and the rest false. The "true" state is red
		// and the "false" state is blue"
		this.state = {
			squareStates: Array.from({length: 9}, () => Math.random()).map(x => x > 0.5)
		};
	}

	render() {
		return(<Board
			squareStates = {this.state.squareStates}
		/>);
	}
}

function App() {
  return (<Game />);
}

export default App;
