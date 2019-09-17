import React, { Component } from 'react';
import '../App.css';

class CartBody extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		let qty = 3;
		return (
			<div className="cartBody">
				<h3>You have {qty} items in your cart</h3>
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
