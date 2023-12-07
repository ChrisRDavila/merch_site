import React from "react";
import PropTypes from "prop-types";

 function PriceCalculator(props) {
  let calculatedPrice = 0;
  props.cartList.forEach((product) => {
    const selectedItemData = props.itemData.find(
      (item) => item.productType === product.item
    );
    calculatedPrice = selectedItemData.pricePerUnit * product.quantity;
  });
  

  return (
    <React.Fragment>
      <p>Total Price: ${calculatedPrice}</p>
    </React.Fragment>
  )
}

PriceCalculator.propTypes = {
  cartList: PropTypes.array,
  itemData: PropTypes.array
};

export default PriceCalculator