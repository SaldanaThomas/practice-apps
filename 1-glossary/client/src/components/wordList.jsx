import React from 'react';
import WordEntry from './wordEntry.jsx';

const wordList = ({items}) => {

  return (
    <div>
      <h2>Word List</h2>
      <div>{items.map((item, index) => <WordEntry item={item} key={index}/>)}</div>
    </div>
  );
}

export default wordList;