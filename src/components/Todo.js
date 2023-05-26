import React from "react";

export default function Todo(props) {
  const deleteHandler = () => {
    props.setListItem( props.listItem.filter((element)=> element.id !== props.task.id))
    
  };

  return (
    <div className="todo">
      <li className="todo-item">{props.text}</li>
      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}
