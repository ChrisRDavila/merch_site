import React, {useState} from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

// let itemData = [
//   {
//     productType: "album",
//     description:
//       "A vinyl record of the band's latest album.  Comes with a digital download.",
//     pricePerUnit: 20,
//     inventory: 50,
//   },
//   {
//     productType: "shirt",
//     description: "A t-shirt with the band's logo on it.",
//     pricePerUnit: 15,
//     inventory: 45,
//   },
//   {
//     productType: "button",
//     description: "A button with the band's logo on it.",
//     pricePerUnit: 1,
//     inventory: 33,
//   },
// ];

// function testFunction(findThisIndex) {
//   for (let i = 0; i > itemData.length; i++) {
//     if (itemData[i].inventory === findThisIndex) {
//       return i;
//     }
//   }
// }

function NewOrderForm(props) {
  // const [errorMessage, setErrorMessage] = useState("");

  function handleNewOrderFormSubmission(event) {
    event.preventDefault();
    const selectedItemType = event.target.items.value;
    const quantity = parseInt(event.target.quantity.value);
    // let errorMessage = "Can't place order. Order exceeds our stock levels";

    // let inventory = parseInt(event.target.inventory.value);

    const selectedItemData = props.itemData.find(
      (item) => item.productType === selectedItemType
    );

    if (selectedItemData && quantity <= selectedItemData.inventory) {
      props.onNewOrderCreation({
        quantity: quantity,
        item: selectedItemType,
        description: selectedItemData.description,
        orderPrice: selectedItemData.pricePerUnit * quantity,
        inventory: selectedItemData.inventory,
        id: v4(),
      });

      props.updateInventory(selectedItemType, selectedItemData.inventory - quantity);
      props.setErrorMessage("");
    } else {
      props.setErrorMessage("Can't place order, out of stock");
      
    }
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewOrderFormSubmission}>
        <label htmlFor="items">Items</label>
        <select name="items" id="items">
          <option value="album">Album</option>
          <option value="shirt">Shirt</option>
          <option value="button">Button</option>
        </select>
        <input type="number" name="quantity" placeholder="quantity"></input>
        <button type="submit">Submit</button>
      </form>
      {props.errorMessage && <p></p>}
    </React.Fragment>
  );
}
NewOrderForm.propTypes = {
  onNewOrderCreation: PropTypes.func,
};

export default NewOrderForm;
