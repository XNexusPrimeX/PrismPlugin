import React from 'react';
import ReactDOM from 'react-dom';

import './globals.css';
import Pages from './components/Pages';
import Client from './client';

function App() {
	const client = new Client();

	return (
		<Pages client={client} />
	)
}

const PrismElement = document.createElement('Prism');
document.body.appendChild(PrismElement)

ReactDOM.render(<App />, PrismElement);