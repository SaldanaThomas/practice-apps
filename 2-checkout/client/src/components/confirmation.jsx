import {useState} from 'react';

const Confirmation = ({next}) => {

  return (
    <div>
      <h4>Review Checkout Information</h4>
      <button onClick={next}>PURCHASE</button>
    </div>
  );
};

export default Confirmation;