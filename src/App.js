import React, { useState, useEffect } from "react";
import axios from 'axios';
import Todo from './Todo';
import TodoForm from './TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/todos')
      .then(response => {
        setTodos(response.data);
      });
  }, []);

  const addTodo = todo => {
    axios.post('http://localhost:5000/todos', { text: todo })
      .then(response => {
        setTodos([...todos, response.data]);
      });
  };

  const completeTodo = id => {
    axios.put(`http://localhost:5000/todos/${id}`)
      .then(() => {
        setTodos(
          todos.map(todo => {
            if (todo.id === id) {
              return {
                ...todo,
                isCompleted: true
              };
            }
            return todo;
          })
        );
      });
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
