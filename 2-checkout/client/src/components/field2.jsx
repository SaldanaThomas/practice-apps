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
        <h6><input name='addressLine1'/> Address Line 1</h6>
        <h6><input name='addressLine2'/> Address Line 2</h6>
        <h6><input name='city'/> City</h6>
        <h6><input name='state'/> State</h6>
        <h6><input name='zip'/> Zip Code</h6>
        <h6><input name='phone'/> Phone</h6>
        <button type='submit'>NEXT</button>
      </form>
    </div>
  );
};

export default Field2;