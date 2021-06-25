import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: { "Content-Type": "application/json" }
});

export const getTodos = async () => {
  try {
    const todos = await api.get("todos?_limit=5");

    return todos.data;
  } catch (err) {
    return console.error(err);
  }
};

export const createTodo = async (title) => {
  try {
    const todo = await api.post("todos", {
      title
    });

    return todo.data;
  } catch (err) {
    return console.error(err);
  }
};

export const deleteTodo = async (id) => {
  try {
    await api.delete(`todos/${id}`);

    return id;
  } catch (err) {
    return console.error(err);
  }
};
