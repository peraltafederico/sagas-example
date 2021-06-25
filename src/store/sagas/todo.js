import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../actionTypes/todo";
import * as api from "../api/todo";

function* createTodo() {
  yield put({ type: actionTypes.SET_LOADING });

  const { title } = yield select((state) => state.todo);
  yield put({ type: actionTypes.CLEAR_TODO_TITLE });

  const todo = yield call(api.createTodo, title);

  yield put({ type: actionTypes.CREATE_TODO, payload: todo });
}

function* getTodos() {
  yield put({ type: actionTypes.SET_LOADING });

  const todos = yield call(api.getTodos);

  yield put({ type: actionTypes.GET_TODOS, payload: todos });
}

function* deleteTodo({ payload }) {
  yield put({ type: actionTypes.SET_LOADING });

  const id = yield call(api.deleteTodo, payload);

  yield put({ type: actionTypes.REMOVE_TODO, payload: id });
}

export default function* todoSaga() {
  yield takeLatest(actionTypes.CREATE_TODO_REQUESTED, createTodo);
  yield takeEvery(actionTypes.GET_TODOS_REQUESTED, getTodos);
  yield takeEvery(actionTypes.REMOVE_TODO_REQUESTED, deleteTodo);
}
