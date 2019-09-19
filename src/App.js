import React, { Component } from 'react';
import CartBody from './components/CartBody';
import CartSummary from './components/CartSummary';
import cart from './sampleData/cart';
import './App.css';

class App extends Component {

  render() {
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
}

export default App;
