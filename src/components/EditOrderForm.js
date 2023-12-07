import React from "react";
import PropTypes from "prop-types";
import NewOrderForm from "./NewOrderForm";
import ReusableOrderForm from "./ReusableOrderForm";

function EditOrderForm(props) {
  const { order, onEditOrder, itemData } = props;
  console.log("Reached EditOrderForm", order);

  function handleEditOrderFormSubmit(event) {
    event.preventDefault();
    console.log("Items value:", event.target.elements.items.value);
    console.log("Quantity value:", event.target.elements.quantity.value);
    console.log("All Item Data:", itemData);
    const selectedItemData = props.itemData.find(
      (item) => item.productType === event.target.elements.items.value
    );
    // console.log("Price per unit: ", selectedItemData.pricePerUnit);
    console.log(order.quantity)


    const updateOrder = {
      ...order,
      item: event.target.elements.items.value || order.item,
      quantity: parseInt(event.target.elements.quantity.value) || order.quantity,
      description: order.description,
      // totalPrice: parseInt(event.target.elements.pricePerUnit.value) * parseInt(order.quantity) || parseInt(order.pricePerUnit) * parseInt(order.quantity),
   
      inventory: order.inventory,
      id: order.id
    }
    console.log("Update order:", updateOrder);
    onEditOrder(updateOrder);
    console.log("Form submitted!");
  }

  return (
    <React.Fragment>
      <ReusableOrderForm
        formSubmissionHandler={handleEditOrderFormSubmit}
        buttonText="Edit"
      />
    </React.Fragment>
  );
}

EditOrderForm.propTypes = {
  order: PropTypes.object,
  onFormSubmit: PropTypes.func,
  onEditOrder: PropTypes.func,
};

export default EditOrderForm;
