import {useState} from 'react';

const Field2 = ({next}) => {

  const handleSubmit = () => {
    event.preventDefault();
    let formData = new FormData(document.getElementById('Address'));
    let checkoutData = {address: ''};
    for (const [key, value] of formData) {
      if (key === 'phone') {
        checkoutData[key] = value
      } else {
        checkoutData['address'] += value;
      }
    }
    next(checkoutData);
  };

  return (
    <div>
      <h4>Please Enter Shipping Address</h4>
      <form id='Address' onSubmit={handleSubmit}>
        <h6><input name='addressLine1' maxLength='15' required/> Address Line 1</h6>
        <h6><input name='addressLine2' maxLength='15'/> Address Line 2</h6>
        <h6><input name='city' maxLength='9' required/> City</h6>
        <h6><input name='state' maxLength='2' required/> State</h6>
        <h6><input name='zip' maxLength='9' required/> Zip Code</h6>
        <h6><input name='phone' maxLength='14' required/> Phone</h6>
        <button type='submit' required>NEXT</button>
      </form>
    </div>
  );
};

export default Field2;