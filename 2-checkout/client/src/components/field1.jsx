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
        <h6><input name='name' maxLength='20' required/> Name</h6>
        <h6><input name='email' maxLength='20' required/> Email</h6>
        <h6><input name='password' maxLength='20' required/> Password</h6>
        <button type='submit' required>NEXT</button>
      </form>
    </div>
  );
};

export default Field1;