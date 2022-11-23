import React from 'react';

const wordEntry = ({item}) => {

  return (
    <div>
      <h4>{item.word}<button>EDIT</button><button>DELETE</button></h4>
      <div>{item.defintion}</div>
    </div>
  );
}

export default wordEntry;