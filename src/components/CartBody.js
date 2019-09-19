import React, { Component } from 'react';
import '../App.css';

class CartBody extends Component {

	render() {
		return (
			<div className="cartBody">
				<h3>You have ? items in your cart</h3>
				<div className="cartBodyContent">
					{/* render cart products here */}
				</div>
			</div>
		);
	}

	renderCartProducts() {
		return null;
	}
}

export default CartBody;
