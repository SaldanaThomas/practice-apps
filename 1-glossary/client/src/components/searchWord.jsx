import {useState} from 'react';

const searchWord = ({create}) => {
  const [search, setSearch] = useState('');

  const updateSearch = () => {
    setSearch(event.target.value);
  }

  return (
    <div>
      <input placeholder='search for a word...' onChange={updateSearch}></input>
      <button onClick={() => create(search)}>SEARCH WORD</button>
    </div>
  );
};

export default searchWord;