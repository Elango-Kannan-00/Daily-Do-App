import React, { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTask = () => {
    if (todo.trim() === "") return;
    setTodoList([
      ...todoList,
      { id: Date.now(), text: todo, completed: false },
    ]);
    setTodo("");
  };

  const invertStatus = (id) => {
    setTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteItem = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const afterStrikeThrough = (completed) => ({
    cursor: "pointer",
    textDecoration: completed ? "line-through" : "none",
    color: completed ? "grey" : "black",
  });

  return (
    <div className="app-container">
      <h1 className="main-heading">Welcome to EK's Daily-Do App</h1>
      <div className="todo-body">
        <h1>Be Productive</h1>
        <div className="input">
          <input
            type="text"
            value={todo}
            placeholder="Add any task"
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="add-button" onClick={addTask}>
            Add
          </button>
        </div>

        <ul className="todo-items">
          {todoList.map((task) => (
            <li
              key={task.id}
              onClick={() => invertStatus(task.id)}
              style={afterStrikeThrough(task.completed)}
            >
              <span>{task.text} </span>
              <button
                className="delete-button"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteItem(task.id);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
