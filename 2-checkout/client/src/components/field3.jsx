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
        <h6><input name='card' maxLength='20' required/> Credit Card Number</h6>
        <h6><input name='expDate' maxLength='5' required/> Expiration Date</h6>
        <h6><input name='cvv' maxLength='4' required/> CVV</h6>
        <h6><input name='billZip' maxLength='9' required/> Billing Zip Code</h6>
        <button type='submit' required>NEXT</button>
      </form>
    </div>
  );
};

export default Field3;