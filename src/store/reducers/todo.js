import {
  SET_LOADING,
  SET_TODO_TITLE,
  CLEAR_TODO_TITLE,
  CREATE_TODO,
  GET_TODOS,
  REMOVE_TODO
} from "../actionTypes/todo";

const initialState = {
  list: [],
  title: "",
  loading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case SET_TODO_TITLE:
      return {
        ...state,
        title: payload
      };

    case CLEAR_TODO_TITLE:
      return {
        ...state,
        title: ""
      };

    case CREATE_TODO:
      return {
        ...state,
        loading: false,
        list: [payload, ...state.list]
      };

    case GET_TODOS:
      return {
        ...state,
        loading: false,
        list: payload
      };

    case REMOVE_TODO:
      return {
        ...state,
        loading: false,
        list: state.list.filter((task) => task.id !== payload)
      };

    default:
      return state;
  }
};
