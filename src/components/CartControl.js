import React from "react";
import Widget from "./Widget.js";
import CartList from "./CartList.js";
import NewOrderForm from "./NewOrderForm.js";

class CartControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 0,
      totalPrice: 0,
      cartOpen: false,
      mainCartList: [],
      errorMessage: "",
      itemData: [
        {
          productType: "album",
          description:
            "A vinyl record of the band's latest album.  Comes with a digital download.",
          pricePerUnit: 20,
          inventory: 50,
        },
        {
          productType: "shirt",
          description: "A t-shirt with the band's logo on it.",
          pricePerUnit: 15,
          inventory: 45,
        },
        {
          productType: "button",
          description: "A button with the band's logo on it.",
          pricePerUnit: 1,
          inventory: 33,
        },
      ],
    };
  }

  setErrorMessage = (message) => {
    this.setState({errorMessage: message});
  };

  updateInventory = (productType, newInventory) => {
    this.setState((prevState) => ({
      itemData: prevState.itemData.map((item) =>
        item.productType === productType
          ? { ...item, inventory: newInventory }
          : item
      ),
    }));
    console.log(`Remaining stock of ${productType}: ${newInventory}`)
  };

  toggleCartVisibility = () => {
    this.setState((oldState) => ({
      cartOpen: !oldState.cartOpen,
    }));
  };

  handleAddingNewOrderToList = (newOrder) => {
    const newMainCartList = this.state.mainCartList.concat(newOrder);
    this.setState({ mainCartList: newMainCartList, cartOpen: false });
  };

  render() {
    let cartShown = null;
    if (this.state.cartOpen === true) {
      cartShown = (
        <NewOrderForm 
        onNewOrderCreation={this.handleAddingNewOrderToList}
        updateInventory={this.updateInventory}
        itemData={this.state.itemData}
        errorMessage={this.state.errormessage}
        setErrorMessage={this.setErrorMessage} />
      );
    } else {
      cartShown = <CartList cartList={this.state.mainCartList} />;
    }

    return (
      <React.Fragment>
        <Widget
          itemCount={this.state.itemCount}
          onClickEvent={this.toggleCartVisibility}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr />
        {cartShown}
      </React.Fragment>
    );
  }
}

export default CartControl;
