import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";

function App() {
  //States
  const [inputText, setInputText] = useState("");
  const [listItem, setListItem] = useState([]);
  const [filtered, setFiltered] = useState("all");
  const [filteredList, setFilteredList] = useState([]);

  //Functions
  useEffect(() => {
    filterHandler();
    // eslint-disable-next-line
  }, [listItem, filtered]);

  const filterHandler = () => {
    switch (filtered) {
      case "completed":
        setFilteredList(listItem.filter((task) => task.completed === true));
        break;
      case "uncompleted":
        setFilteredList(listItem.filter((task) => task.completed === false));
        break;
      default:
        setFilteredList(listItem);
        break;
    }
    return filteredList;
  };

  return (
    <div className="App">
      <header>
        <h1>TO DO LIST</h1>
      </header>
      <Form
        setInputText={setInputText}
        setListItem={setListItem}
        listItem={listItem}
        inputText={inputText}
        setFiltered={setFiltered}
      />
      <TodoList
        listItem={listItem}
        setListItem={setListItem}
        filteredList={filteredList}
      />
    </div>
  );
}

export default App;
