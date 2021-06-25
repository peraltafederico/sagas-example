import { useEffect } from "react";
import { connect } from "react-redux";
import "./styles.css";
import * as actionTypes from "./store/actionTypes/todo";

function App({
  list,
  createTodo,
  getTodos,
  setTitle,
  title,
  loading,
  deleteTodo
}) {
  useEffect(() => {
    getTodos();
  }, [getTodos]);

  console.log("list", list);

  return (
    <div className="App">
      <input onChange={(e) => setTitle(e.currentTarget.value)} value={title} />
      <button onClick={createTodo}>{loading ? "Loading" : "Create"}</button>
      {list.map((task) => (
        <ul onDoubleClick={() => deleteTodo(task.id)} key={task.title}>
          {task.title}
        </ul>
      ))}
    </div>
  );
}

const mapStateToProps = ({ todo }) => todo;

const mapDispatchToProps = {
  createTodo: () => ({
    type: actionTypes.CREATE_TODO_REQUESTED
  }),
  getTodos: () => ({
    type: actionTypes.GET_TODOS_REQUESTED
  }),
  deleteTodo: (id) => ({
    type: actionTypes.REMOVE_TODO_REQUESTED,
    payload: id
  }),
  setTitle: (title) => ({
    type: actionTypes.SET_TODO_TITLE,
    payload: title
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
