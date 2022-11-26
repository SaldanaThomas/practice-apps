import {useState} from 'react';

const Confirmation = ({next, data}) => {

  return (
    <div>
      <h4>Review Checkout Information</h4>
      <h5>----------------------------</h5>
      <h5>User Info:</h5>
      <div>Name: {data.name}</div>
      <div>Email: {data.email}</div>
      <div>Password: {data.password}</div>
      <h5>----------------------------</h5>
      <h5>Address Info:</h5>
      <div>Address: {data.address}</div>
      <div>Phone Number: {data.phone}</div>
      <h5>----------------------------</h5>
      <h5>Payment Info:</h5>
      <div>Card Number: {data.card}</div>
      <div>Expiration Date: {data.expDate}</div>
      <div>CVV: {data.cvv}</div>
      <div>Billing Zip Code: {data.billZip}</div>
      <h5>----------------------------</h5>
      <button onClick={next}>PURCHASE</button>
    </div>
  );
};

export default Confirmation;