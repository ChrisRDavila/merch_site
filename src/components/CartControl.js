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
      cartOpen: false,
      mainCartList: []
    };
  }

  toggleCartVisibility = () => {
    this.setState(oldState => ({
      cartOpen: !oldState.cartOpen
    }))
  }

  handleAddingNewOrderToList = (newOrder) => {
    const newMainCartList = this.state.mainCartList.concat(newOrder);
    this.setState({mainCartList: newMainCartList,
                  cartOpen: false });
  }



  render() {
    let cartShown = null;
    if (this.state.cartOpen === true) {
      cartShown = <NewOrderForm onNewOrderCreation={this.handleAddingNewOrderToList}/>
    } else {
      cartShown = <CartList cartList = {this.state.mainCartList}/>
    }
    
    return ( 
      <React.Fragment>
        <Widget 
          itemCount = {this.state.itemCount}
          onClickEvent = {this.toggleCartVisibility}
        />
        <br /><br /><br /><br /><br />
        <hr />
        {cartShown}
      </React.Fragment>
    );
  }

}

export default CartControl;