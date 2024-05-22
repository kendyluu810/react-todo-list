import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <form className="w-full mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="outline-none bg-transparent border border-indigo-600 py-2 px-4 mt-4 mb-8 w-72 text-white placeholder-white placeholder-opacity-50"
        value={value}
        placeholder="Add a new task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="bg-[#8758ff] border-none p-[0.55rem] text-white cursor-pointer"
      >
        Add Task
      </button>
    </form>
  );
};
