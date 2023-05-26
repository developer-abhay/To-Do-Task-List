import React from 'react';



export default function Form(props) {

  const handleChange = (event) => {
    props.setText(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    props.setListItem([
      ...props.listItem,
    {
      listItemText : props.text,
      completed : false,
      id : Math.random()*1000
    }])
    props.setText('');
  }


  return (
      <form name="todo-form">
        <input type="text" className="todo-input" value={props.text} onChange={handleChange}/>
        <button onClick={submitHandler} className="todo-button" type="submit" >
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
  );
}
