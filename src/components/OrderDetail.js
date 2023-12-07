import React from "react";
import PropTypes from "prop-types";

function OrderDetail(props){
  const { order, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Order Detail</h1>
      <p>quantity: {order.quantity}</p>
      <p>item: {order.item}</p>
      <p>description: {order.description}</p>
      <p>cost: {order.orderPrice}</p>
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