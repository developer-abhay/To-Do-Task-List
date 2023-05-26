import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import  { useState }  from 'react';

function App() {
  const [inputText , setInputText] = useState('');
  const [listItem , setListItem] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>TO DO LIST</h1>
      </header>
      <Form setInputText = {setInputText} setListItem={setListItem} listItem={listItem} inputText={inputText}/>
      <TodoList listItem={listItem} setListItem={setListItem} />
    </div>
  );
}

export default App;
