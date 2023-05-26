import React from "react";
import Todo from "./Todo";

export default function TodoList(props) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.filteredList.map((task) => (
          <Todo
            text={task.text}
            key={task.id}
            task={task}
            listItem={props.listItem}
            setListItem={props.setListItem}
          />
        ))}
      </ul>
    </div>
  );
}
