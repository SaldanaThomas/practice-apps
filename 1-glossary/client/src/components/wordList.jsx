import React from 'react';
import WordEntry from './wordEntry.jsx';

const wordList = ({items, remove, edit}) => {
  return (
    <div>
      <h2>Word List</h2>
      <div>{items.map((item, index) => <WordEntry item={item} key={index} remove={remove} edit={edit}/>)}</div>
    </div>
  );
}

export default wordList;