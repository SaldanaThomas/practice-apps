import {useState, useEffect} from "react";
import AddWord from "./addWord.jsx";
import SearchWord from './searchWord.jsx';
import WordList from "./wordList.jsx";
import axios from "axios";

const path = 'http://localhost:3000/glossary';

const App = () => {
  const [words, setWords] = useState([])
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState('');
  const [render, setRender] = useState(false);

  //Rerender Glossary
  useEffect(() => {
    axios.get(path)
    .then(({data}) => setWords(data))
    .catch(err => console.log('FAILED TO RETRIEVE WORDS FROM DATABASE'))
    .then(() => setResult(createSearchResult()));
  }, [render, result]);

  //Update search term
  const updateSearch = () => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  //Display words that contain search term
  const createSearchResult = (results = []) => {
    event.preventDefault();
    words.forEach(word => word.term.toLowerCase().includes(search) && results.push(word));
    return results;
  };

  //Add new word to glossary
  const addWord = (newTerm, newDefinition) => {
    event.preventDefault();
    axios.post(path, {term: newTerm, definition: newDefinition})
    .then(() => setRender(!render));
  };

  //Update definition of word in glossary
  const editWord = (term, newDefinition) => {
    event.preventDefault();
    axios.patch(path, {term: term, definition: newDefinition})
    .then(() => setRender(!render));
  };

  //Remove word from glossary
  const removeWord = ({term, definition}) => {
    axios.delete(path, {data: {term: term, definition: definition}})
    .then(() => setRender(!render));
  };

  return (
  <div>
    <h1>Glossary!</h1>
    <div><AddWord add={addWord}/></div>
    <div><SearchWord create={createSearchResult} update={updateSearch}/></div>
    <div><WordList items={result} remove={removeWord} edit={editWord}/></div>
  </div>
  );
};

export default App;