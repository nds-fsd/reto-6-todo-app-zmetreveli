import "./App.css";
import { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";
import { fetchData, deleteTodo, createTodo, modifyTodo } from "./api";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTodo({ text: newTodo });
    } catch (error) {
      console.log("ERROR de Submit", error);
    }
  };

  const handleDelete = async (todoId) => {
    try {
      await deleteTodo(todoId);
      const data = await fetchTodos();
      setTodoList(data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };
  useEffect(() => {
    const getTodoList = async () => {
      const result = await fetchData();

      setTodoList(result);
    };
    getTodoList();
  }, [todoList]);

  return (
    <div className="box-1">
      <div className="box-2">
        <p>lista de todo</p>
        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            todoData={todo}
            handleDelete={handleDelete}
          ></TodoItem>
        ))}
      </div>
      /
      <div className="box-3">
        <p>nuevo todo</p>
        <form onSubmit={handleSubmit}>
          <div>
            todo:
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
          </div>
          <button type="submit">click here</button>
        </form>
      </div>
    </div>
  );
}

export default App;
