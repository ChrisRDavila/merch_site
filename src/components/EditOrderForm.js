import React from "react";
import PropTypes from "prop-types";
import NewOrderForm from "./NewOrderForm";
import ReusableOrderForm from "./ReusableOrderForm";

// function handleEditOrderFormSubmission(event) {
//   event.preventDefault();
//   console.log(event.target.item.value, event.target.description.value, event.target.quantity.value, order.id);
//   props.onEditOrder({item: event.target.item.value, description: event.target.description.value, quantity: event.target.quantity.value, id: order.id})
// }

function EditOrderForm(props) {
  const { order, onEditOrder } = props;
  console.log("Reached EditOrderForm");

  function handleEditOrderFormSubmit(event) {
    event.preventDefault(event);
    //Get values
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
