import React from "react";
import PropTypes from "prop-types";

function Order(props){
  return (
    <React.Fragment>
      <p>{props.quantity} of {props.item}</p>
      <p><em>{props.description}</em></p>
    </React.Fragment>
  );
}

Order.propTypes = {
  quantity: PropTypes.number,
  item: PropTypes.string,
  description: PropTypes.string
};

export default Order;