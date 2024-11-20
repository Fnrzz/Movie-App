import axios from "axios";
export const fetchApiMovies = (search) => {
  const apikey = import.meta.env.VITE_API_KEY;
  return async (dispatch) => {
    dispatch({ type: "FETCH_MOVIES_LOADING" });
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=${apikey}&s=${
        search ? search : "avengers"
      }`
    );
    if (res.data.Error) {
      dispatch({
        type: "FETCH_MOVIES_ERROR",
        payload: res.data.Error,
      });
    } else {
      dispatch({
        type: "FETCH_MOVIES_SUCCESS",
        payload: res.data.Search,
      });
    }
  };
};
