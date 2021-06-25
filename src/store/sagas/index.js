import { spawn } from "redux-saga/effects";
import todoSaga from "./todo";

export default function* rootSaga() {
  yield spawn(todoSaga);
}
