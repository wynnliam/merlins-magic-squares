import React from 'react';
import logo from './logo.svg';
import './App.css';

function Square(props) {
	return(
		<button className="square" color="red">
			A
		</button>
	);
}

class Game extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(Square());
	}
}

function App() {
  return (<Game />);
}

export default App;
