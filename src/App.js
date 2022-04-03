import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  function handleOnChange(event) {
    const input = event.target.value;
    setInput(input);
  }

  function addToDo(event) {
    const addNewToDo = [...todos, { text: input, status: false }];
    setTodos(addNewToDo);
    setInput("");
  }
  function removeTodo(todoIndex) {
    const deleteTodo = todos.filter((todos, index) => index !== todoIndex);
    setTodos(deleteTodo);
  }

  function toggleStatus(todoIndex) {
    const newTodoStatus = [...todos];
    newTodoStatus[todoIndex].status = !newTodoStatus[todoIndex].status;
    setTodos(newTodoStatus);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <input
            className="task-input"
            onChange={handleOnChange}
            value={input}
            placeholder="new ToDo"
          ></input>
          <button className="button-add" onClick={addToDo}>
            Add
          </button>
          <ul className="list">
            {todos.map((todos, index) => (
              <li className="list-items" key={index}>
                <p className="text">{todos.text}</p>
                <button
                  className={`button-complete ${
                    todos.status ? "highlight" : ""
                  }`}
                  onClick={() => toggleStatus(index)}
                >
                  {todos.status ? "Done" : "Pending"}
                </button>
                <button
                  className="button-delete"
                  onClick={() => removeTodo(index)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
