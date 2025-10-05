import React, { use, useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTask = () => {
    if (todo.trim() === "") return;
    else {
      setTodoList([
        ...todoList,
        { id: Date.now(), text: todo, completed: false },
      ]);
      setTodo = "";
    }
  };

  return (
    <div>
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

      <ul>
        {todoList.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
