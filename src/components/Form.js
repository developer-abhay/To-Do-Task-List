import React from "react";

export default function Form(props) {
  const handleChange = (event) => {
    props.setInputText(event.target.value);
  };

  const addItem = (event) => {
    event.preventDefault();
    props.setListItem([
      ...props.listItem,
      {
        text: props.inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    props.setInputText("");
  };

  const filterUpdate = (event) => {
    props.setFiltered(event.target.value);
  };

  return (
    <form name="todo-form">
      <input
        type="text"
        className="todo-input"
        value={props.inputText}
        onChange={handleChange}
      />
      <button onClick={addItem} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={filterUpdate} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
