import React from "react";

const ToDoList = ({ todos, setTodos }) => {
  return (
    <ul className="list-item">
      {todos.map((todo, index) => {
        return (
          <li className="list-items" key={index}>
            <input
              type="text"
              value={todo.title}
              className="list"
              onChange={(event) => event.preventDefault()}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;
