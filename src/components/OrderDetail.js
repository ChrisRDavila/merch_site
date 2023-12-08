import React from "react";
import PropTypes from "prop-types";
import album from "../img/album.jpg";
import shirt from "../img/Tshirt.png";
import button from "../img/button.jpg";

function OrderDetail(props){
  
  const itemStyling = {
    textAlign: "left",
    marginLeft: "30%",
    marginRight: "30%",
    borderStyle: "solid",
    padding: "10px"
  };
  
  let input;
  const { order, onClickingDelete } = props;
  if (order.item === "album") {
    input = album;
  } else if (order.item === "shirt") {
    input = shirt;
  } else if (order.item === "button") {
    input = button;
  }
  const altAttribute = `image of ${input}`;
  return (
    <React.Fragment>
      <h3>Order Detail</h3>
      <div style={itemStyling}>
        <p>Quantity: {order.quantity}</p>
        <p>Item: {order.item}</p>
        <img src={input} alt= {altAttribute} />
        <p>Description: {order.description}</p>
        <button onClick={props.onClickingEdit}>Update Order</button>
        <button onClick={()=> onClickingDelete(order.id) }>Close Order</button>
      </div>
      <hr/>
      <button onClick={props.onClickingBackToCart}>Return to Cart</button>
    </React.Fragment>
  );
}

OrderDetail.propTypes = {
  order: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBackToCart: PropTypes.func
};

export default OrderDetail;