import {useState} from 'react';

const wordEntry = ({item, remove, edit}) => {
  const [definition, setDefinition] = useState(false);
  const [update, setUpdate] = useState('');

  //Display input field for defintion if edit button clicked
  const editField = () => {
    event.preventDefault();
    setDefinition(!definition);
  }

  //Store edit definition field data in update state
  const updateTerm = () => {
    event.preventDefault();
    setUpdate(event.target.value);
  };

  //Pass updated definition to edit function in App.jsx
  const submitTerm = () => {
    event.preventDefault();
    setDefinition(!definition);
    edit(item.term, update);
  };

  return (
    <div>
      <h4>{item.term}
        <span>
          <button onClick={editField}>EDIT</button>
          <button onClick={() => remove(item)}>DELETE</button>
        </span>
      </h4>
      <div>{definition
        ? <div>
            <input placeholder={item.definition} onChange={updateTerm}></input>
            <button onClick={submitTerm}>UPDATE</button>
          </div>
        : item.definition}
      </div>
    </div>
  );
}

export default wordEntry;