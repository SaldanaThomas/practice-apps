import {useState} from 'react';

const addWord = ({add}) => {
  const [term, setTerm] = useState('');
  const [definition, setDefinition] = useState('');

  const updateTerm = () => {
    setTerm(event.target.value);
  };

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