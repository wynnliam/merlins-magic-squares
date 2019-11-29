import React from 'react';
import logo from './logo.svg';
import './App.css';

function Square(props) {
	let color = props.isActive === true ? "#ff0000" : "#0000ff";

	return(
		<button style={{"backgroundColor": color}} onClick={props.onClick}>
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
			onClick = {() => this.props.onClick(i)}
		/>);
	}

	render() {
		return(
			<div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
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

	markSquare(i) {
		let currSquares = this.state.squareStates.slice();
		currSquares[i] = !currSquares[i];

		switch(i) {
			case 0: // Top left
				currSquares[1] = !currSquares[1];
				currSquares[3] = !currSquares[3];
				currSquares[4] = !currSquares[4];
				break;

			case 1: // Top middle
				currSquares[0] = !currSquares[0];
				currSquares[2] = !currSquares[2];
				break;

			case 2: // Top right
				currSquares[1] = !currSquares[1];
				currSquares[4] = !currSquares[4];
				currSquares[5] = !currSquares[5];
				break;

			case 3: // Middle left
				currSquares[0] = !currSquares[0];
				currSquares[6] = !currSquares[6];
				break;

			case 4: // Middle middle
				currSquares[1] = !currSquares[1];
				currSquares[3] = !currSquares[3];
				currSquares[5] = !currSquares[5];
				currSquares[7] = !currSquares[7];
				break;

			case 5: // Middle right
				currSquares[2] = !currSquares[2];
				currSquares[8] = !currSquares[8];
				break;

			case 6: // Bottom left
				currSquares[3] = !currSquares[3];
				currSquares[4] = !currSquares[4];
				currSquares[7] = !currSquares[7];
				break;

			case 7: // Bottom middle
				currSquares[6] = !currSquares[6];
				currSquares[8] = !currSquares[8];
				break;

			case 8: // Bottom right
				currSquares[4] = !currSquares[4];
				currSquares[5] = !currSquares[5];
				currSquares[7] = !currSquares[7];
				break

			default:
				break;
		}

		this.setState({
			squareStates : currSquares
		});
	}

	render() {
		return(<Board
			squareStates = {this.state.squareStates}
			onClick = {(i) => this.markSquare(i)}
		/>);
	}
}

function App() {
  return (<Game />);
}

export default App;
