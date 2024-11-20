import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const initialState = {
  movies: [],
  loading: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES_LOADING":
      return { ...state, loading: true };
    case "FETCH_MOVIES_SUCCESS":
      return { ...state, loading: false, movies: action.payload, error: false };
    case "FETCH_MOVIES_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
