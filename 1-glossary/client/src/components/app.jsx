import {useState, useEffect} from "react";
import AddWord from "./addWord.jsx";
import SearchWord from './searchWord.jsx';
import WordList from "./wordList.jsx";

const Glossary = [
  {word: 'syntax:', defintion: 'the arrangement of words and phrases to create well-formed sentences in a language.'},
  {word: 'component', defintion: 'a part or element of a larger whole, especially a part of a machine or vehicle.'},
  {word: 'server', defintion: 'a computer or computer program which manages access to a centralized resource or service in a network.'}
]

const App = () => {
  const [words, setWords] = useState(Glossary);

  return (
  <div>
    <h1>Glossary!</h1>
    <div><AddWord /></div>
    <div><SearchWord /></div>
    <div><WordList items={words}/></div>
  </div>
  );
};

export default App;