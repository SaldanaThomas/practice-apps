import {useState, useEffect} from "react";
import AddWord from "./addWord.jsx";
import SearchWord from './searchWord.jsx';
import WordList from "./wordList.jsx";
import axios from "axios";

const path = 'http://localhost:3000/glossary';

const App = () => {
  const [words, setWords] = useState([])
  const [result, setResult] = useState([]);
  const [render, setRender] = useState(false);

  //Render/Rerender Glossary
  useEffect(() => {
    axios.get(path)
    .then(({data}) => setWords(data))
    .catch(err => console.log('FAILED TO RETRIEVE WORDS FROM DATABASE'))
    .then(() => setResult(createSearchResult()));
  }, [render, result])

  //Display words that contain search term
  //Problem -> Constantly rerendering into empty search string resulting in full list
  const createSearchResult = (searchWord = '', results = []) => {
    event.preventDefault();
    words.forEach(word => word.term.includes(searchWord) && results.push(word));
    return results;
  };

  //Add new word to glossary
  const addWord = (newTerm, newDefinition) => {
    event.preventDefault();
    axios.post(path, {term: newTerm, definition: newDefinition})
    .then(() => setRender(!render));
  };

  //Updata definition of word in glossary
  const editWord = (term, newDefinition) => {
    event.preventDefault();
    axios.patch(path, {term: term, definition: newDefinition})
    .then(() => setRender(!render));
  };

  //Remove word from glossary
  //Problem -> If in search, delete rerenders all words instead of words in search
  const removeWord = (word) => {
    console.log(word);
    axios.delete(path, word)
    .then(() => setRender(!render));
  };

  return (
  <div>
    <h1>Glossary!</h1>
    <div><AddWord add={addWord}/></div>
    <div><SearchWord create={createSearchResult}/></div>
    <div><WordList items={result} remove={removeWord} edit={editWord}/></div>
  </div>
  );
};

export default App;