import React from "react";
import PropTypes from "prop-types";

function Order(props){
  return (
    <React.Fragment>
      <p>Your Order: {props.quantity} of {props.item}</p>
      <p><em>Description: {props.description}</em></p>
      <p>cost: {props.orderPrice}</p>
    </React.Fragment>
  );
}

Order.propTypes = {
  quantity: PropTypes.number,
  item: PropTypes.string,
  description: PropTypes.string,
  orderPrice: PropTypes.number
};

export default Order;