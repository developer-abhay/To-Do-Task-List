import React from "react";

export default function Todo(props) {
  const deleteHandler = () => {
    props.setListItem(
      props.listItem.filter((element) => element.id !== props.task.id)
    );
  };

  const completeHandler = () => {
    props.setListItem(
      props.listItem.map((element) => {
        if (element.id === props.task.id) {
          return { ...element, completed: !element.completed };
        }
        return element;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item  ${props.task.completed ? "completed" : ""}`}>
        {props.text}
      </li>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}
