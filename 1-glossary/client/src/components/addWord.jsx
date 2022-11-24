import {useState} from 'react';

const addWord = ({add}) => {
  const [term, setTerm] = useState('');
  const [definition, setDefinition] = useState('');

  //Store term data field in term state
  const updateTerm = () => {
    setTerm(event.target.value);
  };

  //Store definition field data in definition state
  const updateDefinition = () => {
    setDefinition(event.target.value);
  };

  return (
    <div>
      <form>
        <input placeholder='add a word...' onChange={updateTerm}></input>
        <input placeholder='what does it mean...' onChange={updateDefinition}></input>
        <button onClick={() => add(term, definition)}>ADD WORD</button>
      </form>
    </div>
  );
};

export default addWord;