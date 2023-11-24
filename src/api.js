const url = "http://localhost:3000";
export const fetchData = async () => {
  try {
    const response = await fetch(`${url}/todo`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteTodo = async (todoId) => {
  console.log(todoId);
  try {
    const response = await fetch(`${url}/todo/${todoId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error al borrar todo");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
