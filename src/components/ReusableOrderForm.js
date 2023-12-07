import React from "react";
import PropTypes from "prop-types";

function ReusableOrderForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <label htmlFor="items">Items</label>
        <select name="items" id="items">
          <option value="album">Album</option>
          <option value="shirt">Shirt</option>
          <option value="button">Button</option>
        </select>
        <input type="number" name="quantity" placeholder="quantity"></input>
        <button type="submit">{props.buttonText}</button>
      </form>
      {props.errorMessage}
    </React.Fragment>
  );
}

ReusableOrderForm.propTypes = {
  onNewOrderCreation: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableOrderForm;
