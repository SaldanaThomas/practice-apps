import {useState} from 'react';

const Field1 = ({next}) => {
  return (
    <div>
      <h4>Please Enter Account Info</h4>
      <form name='Account'>
        <h6><input/> Name</h6>
        <h6><input/> Email</h6>
        <h6><input/> Password</h6>
        <button onClick={next}>NEXT</button>
      </form>
    </div>
  );
};

export default Field1;