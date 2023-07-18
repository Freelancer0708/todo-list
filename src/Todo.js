import React from "react";

function Todo({ todo, completeTodo, index }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button onClick={() => completeTodo(todo.id)}>Complete</button>
      </div>
    </div>
  );
}

export default Todo;
