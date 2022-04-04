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

  function add(event) {
    const addNewTodo = [...todos, { text: input, status: false }];
    setTodos(addNewTodo);
    setInput("");
  }
  function remove(todoIndex) {
    const deleteTodo = todos.filter((todos, index) => index !== todoIndex);
    setTodos(deleteTodo);
  }

  function toggle(todoIndex) {
    const Status = [...todos];
    Status[todoIndex].status = !Status[todoIndex].status;
    setTodos(Status);
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
            placeholder="new Todo..."
          ></input>
          <button className="button-add" onClick={add}>
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
                  onClick={() => toggle(index)}
                >
                  {todos.status ? "Done" : "Pending"}
                </button>
                <button
                  className="button-delete"
                  onClick={() => remove(index)}
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
