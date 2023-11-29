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

// *------------- DELETE ------------------

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

// *-------------------- CREATE ------------------------

export const createTodo = async (todoData) => {
  try {
    const response = await fetch(`${url}/todo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoData),
    });
    if (!response.ok) {
      throw new Error("Error al crear todo");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

// *--------------------- MODIFY ------------------------

export const modifyTodo = async (todoData) => {
  try {
    const response = await fetch(`${url}/todo`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoData),
    });

    if (!response.ok) {
      throw new Error("Error al modificar todo");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("An error occurred:", error.message);
    throw error;
  }
};
