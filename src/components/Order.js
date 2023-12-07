import React from "react";
import PropTypes from "prop-types";

function Order(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenOrderClicked(props.id)}>
        <p>Order:</p><hr />
        <p>quantity: {props.quantity}</p>
        <p>item: {props.item}</p>
        <p><em>Description: {props.description}</em></p>
        <p>cost: {props.orderPrice}</p>
        {/* <p>inventory: {props.inventory}</p> */}
      </div>
    </React.Fragment>
  );
}

Order.propTypes = {
  quantity: PropTypes.number,
  item: PropTypes.string,
  description: PropTypes.string,
  orderPrice: PropTypes.number,
  inventory: PropTypes.number,
  id: PropTypes.string,
  whenOrderClicked: PropTypes.func
};

export default Order;