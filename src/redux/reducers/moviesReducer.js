let initialState = {
  movies: []
};
const moviesReducer = (state = initialState, action) => {
  if (action.type === "FETCH_MOVIES") {
    return {
      ...state,
      movies: action.movies
    };
  } else {
    return {
      ...state
    };
  }
};

export default moviesReducer;
