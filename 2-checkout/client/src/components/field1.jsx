import {useState} from 'react';

const Field1 = ({next}) => {

  const handleSubmit = () => {
    event.preventDefault();
    let formData = new FormData(document.getElementById('Account'));
    let checkoutData = {};
    for (const [key, value] of formData) {
      checkoutData[key] = value;
    }
    next(checkoutData);
  };

  return (
    <div>
      <h4>Please Enter Account Info</h4>
      <form id='Account' onSubmit={handleSubmit}>
        <h6><input name='name'/> Name</h6>
        <h6><input name='email'/> Email</h6>
        <h6><input name='password'/> Password</h6>
        <button type='submit'>NEXT</button>
      </form>
    </div>
  );
};

export default Field1;