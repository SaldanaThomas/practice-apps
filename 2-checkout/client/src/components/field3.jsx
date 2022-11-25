import {useState} from 'react';

const Field3 = ({next}) => {

  return (
    <div>
      <h4>Please Enter Payment Info</h4>
      <form>
        <h6><input/> Credit Card Number</h6>
        <h6><input/> Expiration Date</h6>
        <h6><input/> CVV</h6>
        <h6><input/> Billing Zip Code</h6>
        <button onClick={next}>NEXT</button>
      </form>
    </div>
  );
};

export default Field3;
// F3 collects credit card #, expiry date, CVV, and billing zip code.