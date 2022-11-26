import {useState, useEffect} from 'react';
import axios from 'axios';
import Field1 from './field1.jsx';
import Field2 from './field2.jsx';
import Field3 from './field3.jsx';
import Confirmation from './confirmation.jsx';

const App = () => {
  const [data, setData] = useState({sessionId: document.cookie});
  const [checkout, setCheckout] = useState(false);
  const [userInfo, setUserInfo] = useState(false);
  const [addressInfo, setAddressInfo] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  const startUserInfo = () => {
    setCheckout(true);
    setUserInfo(true);
  };

  const startAddressInfo = (fields) => {
    setUserInfo(false);
    for (const key in fields) {
      data[key] = fields[key];
    }
    setData(data);
    setAddressInfo(true);
  };

  const startPaymentInfo = (fields) => {
    for (const key in fields) {
      data[key] = fields[key]
    }
    setData(data);
    setAddressInfo(false);
    setPaymentInfo(true);
  };

  const startConfirmation = (fields) => {
    for (const key in fields) {
      data[key] = fields[key]
    }
    setData(data);
    setPaymentInfo(false);
    setConfirmation(true);
  };

  const confirmPurchase = () => {
    axios.post('/checkout', data)
    .then(() => {
      setConfirmation(false);
      setCheckout(false);
    })
    .catch(err => {
      document.body.innerHTML = 'FAILED PURCHASE. YOU HAVE ALREADY MADE YOUR PURCHASE';
    });
  };

  return (
    <div>
      <h1>Multistep Checkout</h1>
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
            ? <Confirmation next={confirmPurchase} data={data}/>
            : <div></div>}
            </div>
        </div>
        : <div>
            <h2>It's time to buy that thing you always wanted!</h2>
            <button onClick={startUserInfo}>Checkout</button>
          </div>}
      </div>
    </div>
  );
};

export default App;