import {useState} from 'react';

const Field2 = ({next}) => {

  return (
    <div>
      <h4>Please Enter Shipping Address</h4>
      <form>
        <h6><input/> Address Line 1</h6>
        <h6><input/> Address Line 2</h6>
        <h6><input/> City</h6>
        <h6><input/> State</h6>
        <h6><input/> Zip Code</h6>
        <h6><input/> Phone</h6>
        <button onClick={next}>NEXT</button>
      </form>
    </div>
  );
};

export default Field2;