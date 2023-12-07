import React from "react";
import PropTypes from "prop-types";

export default function PriceCalculator(props) {
  const itemsList = props.itemsList

  let calculatedPrice = 0;
  
  return (
    <React.Fragment>
      <p>Total Price: {calculatedPrice}</p>
    </React.Fragment>
  )
}

PriceCalculator.propTypes = (
  itemsList = PropTypes.array
);