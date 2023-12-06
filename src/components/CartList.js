import React from "react";
import Order from "./Order.js";
import PropTypes from "prop-types";


function CartList(props){
  return (
    <React.Fragment>
      {props.cartList.map((order, index) =>
        <Order quantity={order.quantity}
          item={order.item}
          description={order.description}
          orderPrice={order.orderPrice}
          inventory={order.inventory}
          key={index}/>
      )}
    </React.Fragment>
  );
}

CartList.propTypes = {
  cartList: PropTypes.array
};

export default CartList;