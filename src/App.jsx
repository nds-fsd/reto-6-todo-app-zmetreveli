import "./App.css";
import { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";
import { fetchData, deleteTodo } from "./api";

function App() {
  const [todoList, setTodoList] = useState([]);
  const handleDelete = async (todoId) => {
    await deleteTodo(todoId);

    try {
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
    </div>
  );
}

export default App;
