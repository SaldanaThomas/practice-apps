import {useState} from 'react';

const wordEntry = ({item, remove, edit}) => {
  const [definition, setDefinition] = useState(false);
  const [update, setUpdate] = useState('');

  const editField = () => {
    event.preventDefault();
    setDefinition(!definition);
  }

  const updateTerm = () => {
    event.preventDefault();
    setUpdate(event.target.value);
  };

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
          <button onClick={() => remove(item.term)}>DELETE</button>
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