import {useState} from 'react';

const searchWord = ({create, update}) => {

  return (
    <div>
      <input placeholder='search for a word...' onChange={update}></input>
      <button onClick={create}>SEARCH WORD</button>
    </div>
  );
};

export default searchWord;