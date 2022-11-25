import {useState, useEffect} from 'react';
import Field1 from './field1.jsx';
import Field2 from './field2.jsx';
import Field3 from './field3.jsx';
import Confirmation from './confirmation.jsx';

const App = () => {
  const [data, setData] = useState({});
  const [checkout, setCheckout] = useState(false);
  const [userInfo, setUserInfo] = useState(false);
  const [addressInfo, setAddressInfo] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  const startUserInfo = () => {
    event.preventDefault();
    setCheckout(true);
    setUserInfo(true);
  };

  const startAddressInfo = () => {
    event.preventDefault();
    setUserInfo(false);
    setAddressInfo(true);
  };

  const startPaymentInfo = () => {
    event.preventDefault();
    setAddressInfo(false);
    setPaymentInfo(true);
  };

  const startConfirmation = () => {
    event.preventDefault();
    setPaymentInfo(false);
    setConfirmation(true);
  };

  const confirmPurchase = () => {
    event.preventDefault();
    setConfirmation(false);
    setCheckout(false);
  };

  console.log(document.cookie);
  return (
    <div>
      <h1>Multistep Checkout</h1>
      <button onClick={startUserInfo}>Checkout</button>
      <div>{checkout
        ? <div><h2>Currently Checking Out</h2>
          <div>{userInfo
            ? <Field1 next={startAddressInfo}/>
            : <div></div>}
          </div>
          <div>{addressInfo
            ? <Field2 next={startPaymentInfo}/>
            : <div></div>}
          </div>
          <div>{paymentInfo
            ? <Field3 next={startConfirmation}/>
            : <div></div>}
          </div>
          <div>{confirmation
            ? <Confirmation next={confirmPurchase}/>
            : <div></div>}
            </div>
        </div>
        : <h2>It's time to buy that thing you always wanted!</h2>}
      </div>
    </div>
  );
};

export default App;