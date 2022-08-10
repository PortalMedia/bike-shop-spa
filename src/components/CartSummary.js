import React from 'react';
import '../App.css';

function CartSummary() {
	return (
		<div className="cartSummary">
			<h2>Cart Summary</h2>
			<div style={{ margin: '15px 15px 60px 15px' }}>
				<div className="flexRowBetween lineItem">
					<span>Subtotal</span>
					<span>?</span>
				</div>
				<div className="flexRowBetween lineItem">
					<span>Shipping</span>
					<span>?</span>
				</div>
				<div className="flexRowBetween lineItem">
					<span>Tax</span>
					<span>?</span>
				</div>
				<div className="divider" />
				<div className="flexRowBetween lineItem">
					<span>Total</span>
					<span>?</span>
				</div>
				<div className="flexRowBetween lineItem" style={{ color: '#b51414' }}>
					<span>You Saved</span>
					<span>?</span>
				</div>
			</div>
			<div className="checkoutButton">
				<span>Checkout Now</span>
			</div>
		</div>
	);
}

export default CartSummary;
