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

	render() {
		return(
			<div>
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
	render() {
		return(<Board />);
	}
}

function App() {
  return (<Game />);
}

export default App;
