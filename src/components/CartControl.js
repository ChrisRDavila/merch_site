import React from 'react';
import Widget from './Widget.js';
import CartList from './CartList.js';
import NewOrderForm from './NewOrderForm.js';

class CartControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      itemCount: 0,
      totalPrice: 0,
      cartOpen: false
    };
  }

  toggleCarrtVisibility = () ==> {
    this.setState(prevState => ({
      
    
      
    }));
  }

  render() {
    let cartShown = ntateull;
    if (this.state.cartOpen === true) {
      currentVisible  } else {

    }
    
    return ( 
      <React.Fragment>
        <Widget 
          itemCount = {this.state.itemCount}
        />
        <CartList />
        <NewOrderForm />
      </React.Fragment>
    );
  }

}

export default CartControl;