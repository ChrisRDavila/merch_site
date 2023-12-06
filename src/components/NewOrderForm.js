import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewOrderForm(props){

  const itemData = {
    album: {
      description: "A vinyl record of the band's latest album.  Comes with a digital download.",
      pricePerUnit: 20,
      inventory: 50
    },
    shirt: {
      description: "A t-shirt with the band's logo on it.",
      pricePerUnit: 15,
      inventory: 45
    },
    button: {
      description: "A button with the band's logo on it.",
      pricePerUnit: 1,
      inventory: 33
    }
  }

  function handleNewOrderFormSubmission(event) {
    event.preventDefault();
    const selectedItem = event.target.items.value;
    const quantity = parseInt(event.target.quantity.value);
    const inventory = parseInt(event.target.inventory.value);


    props.onNewOrderCreation({
      quantity: quantity,
      item: selectedItem,
      description: itemData[selectedItem].description,  
      orderPrice: itemData[selectedItem].pricePerUnit * quantity,
      // inventory: itemData[selectedItem].inventory - quantity,
      id: v4()
    });

    
    
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewOrderFormSubmission}>
        <label for='items'>Items</label>
        <select name='items' id="items">
          <option value='album'>Album</option>
          <option value='shirt'>Shirt</option>
          <option value='button'>Button</option>
        </select>
        <input
          type='number'
          name='quantity'
          placeholder='quantity' 
          ></input>
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
}
NewOrderForm.propTypes = {
  onNewOrderCreation: PropTypes.func
};



export default NewOrderForm;