"use client"
import { useState } from 'react';
import { GrAdd } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

const TodoList = () => {
  const [todos, setTodos] = useState([]); // State to store to-do items
  const [input, setInput] = useState(''); // State to store current input

  // Handle adding a new to-do
  const addTodo = (e) => {
    e.preventDefault(); // Prevent form submission reload
    if (input.trim() === '') return; // Do not add empty to-dos

    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput(''); // Clear input field
  };

  // Toggle completion status
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a to-do
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-5">

    <div className="w-[-600px] mx-auto mt-[-100px] p-5 bg-white rounded shadow">
      <h1 className="text-4xl font-bold mb-4 text-center">To-Do List</h1>
      <form onSubmit={addTodo} className="flex mb-4">
        <input
          type="text"
          className="flex-grow px-3 py-2 border rounded-l focus:outline-none"
          placeholder="Add a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
       <button
  type="submit"
  className="flex items-center w-3px px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600"
>
  Add
  <span className="ml-2">
    <GrAdd />
  </span>
</button>

      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-2 border-b"
          >
            <span
              onClick={() => toggleComplete(todo.id)}
              className={`flex-grow cursor-pointer ${
                todo.completed ? 'line-through text-gray-500' : ''
              }`}
            >
              {todo.text}
            </span>
            <button
  onClick={() => deleteTodo(todo.id)}
  className="text-red-500 hover:text-red-700"
>
  Delete
  <span className="ml-2">
    <MdDelete />
    </span>
</button>
          </li>
        ))}
      </ul>
     
    </div>
    </div>
  );
};

export default TodoList;
