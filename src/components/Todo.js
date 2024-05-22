import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import React from "react";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div
      className="flex justify-between items-center bg-indigo-500
     text-white py-3 px-4 rounded-md mb-4"
    >
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${
          task.completed
            ? "text-[#c5aeff] line-through cursor-pointer"
            : "text-white cursor-pointer"
        }`}
      >
        {task.task}
      </p>
      <div className="flex ">
        <PencilSquareIcon
          className="w-6 h-6 cursor-pointer"
          onClick={() => editTodo(task.id)}
        />
        <TrashIcon
          className="w-6 h-6 cursor-pointer ml-3"
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};
