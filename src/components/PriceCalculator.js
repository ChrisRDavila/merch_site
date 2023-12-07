import React from "react";
import PropTypes from "prop-types";

 function PriceCalculator(props) {
  let calculatedPrice = 0;
  props.cartList.forEach((order) => {
    const selectedItemData = props.itemData.find(
      (item) => item.productType === order.item
    );
    
    calculatedPrice += selectedItemData;
  });
  

  return (
    <React.Fragment>
      <p>Total Price: ${calculatedPrice}</p>
    </React.Fragment>
  )
}

PriceCalculator.propTypes = {
  cartList: PropTypes.array
};

export default PriceCalculator