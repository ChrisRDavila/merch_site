import React from "react";
import PropTypes from "prop-types";
import album from "../img/album.jpg";
import shirt from "../img/Tshirt.png";
import button from "../img/button.jpg";

function OrderDetail(props){
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
      <h1>Order Detail</h1>
      <p>Quantity: {order.quantity}</p>
      <p>Item: {order.item}</p>
      <img src={input} alt= {altAttribute} />
      <p>Description: {order.description}</p>
      <button onClick={props.onClickingEdit}>Update Order</button>
      <button onClick={()=> onClickingDelete(order.id) }>Close Order</button>
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