import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import  { useState }  from 'react';

function App() {
  const [text , setText] = useState('');
  const [listItem , setListItem] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>TO DO LIST</h1>
      </header>
      <Form setText = {setText} setListItem={setListItem} listItem={listItem} text={text}/>
      <TodoList />
    </div>
  );
}

export default App;
