import React from "react";
import Order from "./Order.js";

const mainOrderList = [
  {
    quantity: 2,
    item: 'ablum',
    desciption: 'album',
    totalPrice: 10.00
  },
  {
    quantity: 1,
    item: 'shirt',
    description: 'band shirt',
    totalPrice: 7.00
  },
  {
    quantity: 3,
    item: 'button',
    description: 'band button',
    totalPrice: 3.00
  }
];

function CartList(){
  return (
    <React.Fragment>
      <hr/>
      {mainOrderList.map((order, index) =>
        <Order quantity={order.quantity}
          item={order.item}
          description={order.description}
          key={index}/>
      )}
    </React.Fragment>
  );
}

export default CartList;