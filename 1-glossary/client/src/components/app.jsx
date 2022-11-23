import {useState, useEffect} from "react";
import AddWord from "./addWord.jsx";
import SearchWord from './searchWord.jsx';
import WordList from "./wordList.jsx";
import axios from "axios";

const Glossary = [
  {term: 'syntax', definition: 'the arrangement of words and phrases to create well-formed sentences in a language.'},
  {term: 'component', definition: 'a part or element of a larger whole, especially a part of a machine or vehicle.'},
  {term: 'server', definition: 'a computer or computer program which manages access to a centralized resource or service in a network.'}
]

const App = () => {
  const [words, setWords] = useState(Glossary);
  const [result, setResult] = useState(Glossary);
  const [render, setRender] = useState(false);

  useEffect(() => {
    createSearchResult();
  }, [words, render])

  const createSearchResult = (searchWord = '', results = []) => {
    event.preventDefault();
    words.forEach(word => word.term.includes(searchWord) && results.push(word));
    setResult(results);
  };

  const addWord = (newTerm, newDefinition) => {
    event.preventDefault();
    Glossary.push({term: newTerm, definition: newDefinition});
    setWords(Glossary);
    setRender(!render);
  };

  const editWord = (term, newDefinition) => {
    Glossary.forEach((word, index) => {
      if (word.term === term) {
        word.definition = newDefinition;
      }
    });
    setWords(Glossary);
    setRender(!render);
  };

  const removeWord = (term) => {
    //problem -> if in search, delete rerenders all non deleted words
    event.preventDefault();
    Glossary.forEach((word, index) => {
      if (word.term === term) {
        Glossary.splice(index, 1);
      }
    });
    setWords(Glossary);
    setRender(!render);
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