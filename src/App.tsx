import React from 'react';
import ReactDOM from 'react-dom';

import './globals.css';
import Pages from './components/Pages';

function App() {
	return (
		<Pages />
	)
}

const PrismElement = document.createElement('Prism');
document.body.appendChild(PrismElement)

ReactDOM.render(<App />, PrismElement);