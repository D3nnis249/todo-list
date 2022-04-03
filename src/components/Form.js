import React from "react";

const Form = ({ input, setInput, todos, setTodos }) => {
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  function addListItem() {
    const newListItem = [...todos, { title: "input" }];
    setTodos(newListItem);
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Enter a new ToDo... "
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button onClick={addListItem} className="button-add" type="submit">
        Add{""}
      </button>
    </form>
  );
};

export default Form;
