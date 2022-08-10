import React from 'react';
import CartBody from './components/CartBody';
import CartSummary from './components/CartSummary';
import './App.css';

function App() {
	return (
		<div className="app">
			<div className="header flexRowBetween">
				<h2>PortalParts</h2>
				<h2>Cart</h2>
			</div>
			<div className="body flexRowCenter">
				<CartBody />
				<CartSummary />
			</div>
		</div>
	);
}

export default App;
