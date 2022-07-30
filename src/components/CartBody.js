import React from 'react';
import '../App.css';

function CartBody() {
	return (
		<div className="cartBody">
			<h3>You have ? items in your cart</h3>
			<div className="cartBodyContent">{/* render cart products here */}</div>
		</div>
	);
}

export default CartBody;
