import React from "react";
import { deleteTodo } from "../api";

export default function TodoItem({ todoData, handleDelete }) {
  return (
    <div>
      <p>titulo: {todoData.text}</p>
      <button
        onClick={() => {
          handleDelete(todoData.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
