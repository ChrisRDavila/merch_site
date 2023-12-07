import React, {useState} from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewOrderForm(props) {
  const [errorMessage, setErrorMessage] = useState("");
  const [currentStyle, setCurrentStyle] = useState({});
  // Stylesheets
  const styleTextSuccess = {
    color: "#0ECF0E"
  }
  const styleTextFail = {
    color: "#CF300E"
  }
  const centerAlign = {
    textAlign: "center"
  }

  // Branching Logic & Form Submission
  function handleNewOrderFormSubmission(event) {
    event.preventDefault();
    const selectedItemType = event.target.items.value;
    const quantity = parseInt(event.target.quantity.value);
    const selectedItemData = props.itemData.find(
      (item) => item.productType === selectedItemType
    );

    if (selectedItemData && quantity <= selectedItemData.inventory) {
      setCurrentStyle(styleTextSuccess);
      props.onNewOrderCreation({
        quantity: quantity,
        item: selectedItemType,
        description: selectedItemData.description,
        inventory: selectedItemData.inventory,
        id: v4(),
      });

      props.updateInventory(selectedItemType, selectedItemData.inventory - quantity);
      props.setErrorMessage(`${quantity} of ${selectedItemType} added to cart!`);
      event.target.quantity.value = null;
    } else {
      setCurrentStyle(styleTextFail);
      props.setErrorMessage("Can't place order, out of stock");
      
    }
  }

  return (
    <React.Fragment>
      <div style={centerAlign}>
        <form onSubmit={handleNewOrderFormSubmission}>
          <h3>Item Catalog</h3>
          <label htmlFor="items">All Items: </label>
          <select name="items" id="items">
            <option value="album">Album</option>
            <option value="shirt">Shirt</option>
            <option value="button">Button</option>
          </select>
          <br />
          <p>Amount to purchase: <input type="number" name="quantity" placeholder="Quantity" min="0"></input></p>
          <button type="submit">Submit</button>
        </form>
        <br />
        <div style={currentStyle}>
          {props.errorMessage}
        </div>
      </div>
    </React.Fragment>
  );
}
NewOrderForm.propTypes = {
  onNewOrderCreation: PropTypes.func,
};

export default NewOrderForm;
