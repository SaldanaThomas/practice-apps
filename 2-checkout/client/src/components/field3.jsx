import {useState} from 'react';

const Field3 = ({next}) => {

  const handleSubmit = () => {
    event.preventDefault();
    let formData = new FormData(document.getElementById('Payment'));
    let checkoutData = {};
    for (const [key, value] of formData) {
      checkoutData[key] = value;
    }
    next(checkoutData);
  };

  return (
    <div>
      <h4>Please Enter Payment Info</h4>
      <form id='Payment' onSubmit={handleSubmit}>
        <h6><input name='card'/> Credit Card Number</h6>
        <h6><input name='expDate'/> Expiration Date</h6>
        <h6><input name='cvv'/> CVV</h6>
        <h6><input name='billZip'/> Billing Zip Code</h6>
        <button type='submit'>NEXT</button>
      </form>
    </div>
  );
};

export default Field3;