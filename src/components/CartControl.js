import React from "react";
import Widget from "./Widget.js";
import CartList from "./CartList.js";
import NewOrderForm from "./NewOrderForm.js";
import OrderDetail from "./OrderDetail.js";
import EditOrderForm from "./EditOrderForm.js";
import PriceCalculator from "./PriceCalculator.js";

class CartControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // totalPrice: 0,
      // pricePerUnit: 0,
      cartOpen: false,
      mainCartList: [],
      selectedOrder: null,
      errorMessage: "",
      editing: false,
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

  handleEditClick = () => {
    console.log("handleEditClick!!");
    this.setState({ editing: true });
  };



  setErrorMessage = (message) => {
    this.setState({ errorMessage: message });
  };

  updateInventory = (productType, newInventory) => {
    this.setState((prevState) => ({
      itemData: prevState.itemData.map((item) =>
        item.productType === productType
          ? { ...item, inventory: newInventory }
          : item
      ),
    }));
    console.log(`Remaining stock of ${productType}: ${newInventory}`);
  };

  // toggleCartVisibility = () => {
  //   this.setState((oldState) => ({
  //     cartOpen: !oldState.cartOpen,
  //   }));
  // }; before OrderDetailSelection added

  toggleCartVisibility = () => {
    if (this.state.selectedOrder != null) {
      this.setState({
        cartOpen: false,
        selectedOrder: null,
      });
    } else {
      this.setState((oldState) => ({
        cartOpen: !oldState.cartOpen,
      }));
    }
  };

  handleAddingNewOrderToList = (newOrder) => {
    const newMainCartList = this.state.mainCartList.concat(newOrder);
    this.setState({ mainCartList: newMainCartList, cartOpen: false });
  };

  handleChangingSelectedOrder = (id) => {
    const selectedOrder = this.state.mainCartList.filter(
      (order) => order.id === id
    )[0];
    this.setState({ selectedOrder: selectedOrder });
  };

  // handleEditingOrderInList = (orderToEdit) => {
  //   const editedMainCartList = this.state.mainCartList
  //     .filter((order) => order.id !== this.state.selectedOrder.id)
  //     .concat(orderToEdit);
  //     console.log("Message here?")
  //   this.setState({
  //     mainCartList: editedMainCartList,
  //     editing: false,
  //     selectedOrder: null,
  //   }, () => console.log(this.state.mainCartList));
  // };

  handleEditingOrderInList = (orderToEdit) => {
    const editedMainCartList = this.state.mainCartList.map((order) =>
    order.id === orderToEdit.id ? { ...order, ...orderToEdit } : order
    );
    this.setState({
      mainCartList: editedMainCartList,
      editing: false,
      selectedOrder: null,
    })
  }


  handleDeletingOrder = (id) => {
    const newMainCartList = this.state.mainCartList.filter(
      (order) => order.id !== id
    );
    this.setState({
      mainCartList: newMainCartList,
      selectedOrder: null,
    });
  };

  render() {
    let currentView = null;

    if (this.state.editing === true) {
      console.log("Rendering Edit");
      currentView = (
        <EditOrderForm
          order={this.state.selectedOrder}
          onEditOrder={this.handleEditingOrderInList}
          itemData={this.state.itemData}
        />
        // onFormSubmit={this.handleAddingNewOrderToList} />);
      );
    } else if (this.state.selectedOrder != null) {
      currentView = (
        <OrderDetail
          order={this.state.selectedOrder}
          onClickingDelete={this.handleDeletingOrder}
          onClickingEdit={this.handleEditClick}
          onClickingBackToCart={this.toggleCartVisibility}
        />
      );
    } else if (this.state.cartOpen === false) {
      currentView = (
        <NewOrderForm
          onNewOrderCreation={this.handleAddingNewOrderToList}
          updateInventory={this.updateInventory}
          itemData={this.state.itemData}
          errorMessage={this.state.errorMessage}
          setErrorMessage={this.setErrorMessage}
        />
      );
    } else {
      currentView = (
        <React.Fragment>
        <CartList
          cartList={this.state.mainCartList}
          onOrderSelection={this.handleChangingSelectedOrder}
        />
        <PriceCalculator 
          cartList={this.state.mainCartList}
          itemData={this.itemData}
        />
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <Widget
          itemCount={this.state.mainCartList.length}
          onClickEvent={this.toggleCartVisibility}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr />
        {currentView}
      </React.Fragment>
    );
  }
}

export default CartControl;

//IF I SCREW EVERYTHING UP

// import React from "react";
// import Widget from "./Widget.js";
// import CartList from "./CartList.js";
// import NewOrderForm from "./NewOrderForm.js";
// import OrderDetail from "./OrderDetail.js";

// class CartControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       totalPrice: 0,
//       cartOpen: false,
//       mainCartList: [],
//       selectedOrder: null,
//       errorMessage: "",
//       editing: false,
//       itemData: [
//         {
//           productType: "album",
//           description:
//             "A vinyl record of the band's latest album.  Comes with a digital download.",
//           pricePerUnit: 20,
//           inventory: 50,
//         },
//         {
//           productType: "shirt",
//           description: "A t-shirt with the band's logo on it.",
//           pricePerUnit: 15,
//           inventory: 45,
//         },
//         {
//           productType: "button",
//           description: "A button with the band's logo on it.",
//           pricePerUnit: 1,
//           inventory: 33,
//         },
//       ],
//     };
//   }

//   handleEditClick = () => {
//     console.log("handleEditClick!!");
//     this.setState({ editing: true });
//   };

//   setErrorMessage = (message) => {
//     this.setState({ errorMessage: message });
//   };

//   updateInventory = (productType, newInventory) => {
//     this.setState((prevState) => ({
//       itemData: prevState.itemData.map((item) =>
//         item.productType === productType
//           ? { ...item, inventory: newInventory }
//           : item
//       ),
//     }));
//     console.log(`Remaining stock of ${productType}: ${newInventory}`);
//   };

//   toggleCartVisibility = () => {
//     this.setState((oldState) => ({
//       cartOpen: !oldState.cartOpen,
//       selectedOrder: null,
//     }));
//   };

//   handleAddingNewOrderToList = (newOrder) => {
//     const newMainCartList = this.state.mainCartList.concat(newOrder);
//     this.setState({ mainCartList: newMainCartList, cartOpen: false });
//   };

//   handleChangingSelectedOrder = (id) => {
//     const selectedOrder = this.state.mainCartList.filter(
//       (order) => order.id === id
//     )[0];
//     this.setState({ selectedOrder: selectedOrder });
//   };

//   render() {
//     let cartShown = null;
//     if (this.state.selectedOrder != null) {
//       cartShown = (
//         <OrderDetail
//           order={this.state.selectedOrder}
//           onClickingEdit={this.handleEditClick}
//         />
//       );
//     } else if (this.state.cartOpen === false) {
//       cartShown = (
//         <NewOrderForm
//           onNewOrderCreation={this.handleAddingNewOrderToList}
//           updateInventory={this.updateInventory}
//           itemData={this.state.itemData}
//           errorMessage={this.state.errorMessage}
//           setErrorMessage={this.setErrorMessage}
//         />
//       );
//     } else {
//       cartShown = (
//         <CartList
//           cartList={this.state.mainCartList}
//           onOrderSelection={this.handleChangingSelectedOrder}
//         />
//       );
//     }
//     return (
//       <React.Fragment>
//         <Widget
//           itemCount={this.state.mainCartList.length}
//           onClickEvent={this.toggleCartVisibility}
//         />
//         <br />
//         <br />
//         <br />
//         <br />
//         <br />
//         <hr />
//         {cartShown}
//       </React.Fragment>
//     );
//   }
// }

// export default CartControl;
