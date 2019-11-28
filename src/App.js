import React from 'react';
import logo from './logo.svg';
import './App.css';

class Game extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(<p> Welcome! </p>);
	}
}

function App() {
  return (<Game />);
}

export default App;
