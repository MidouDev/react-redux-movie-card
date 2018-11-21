import { apikey } from "../../api/apikey";

export function callMovies(url, query) {
  return dispatch => {
    return fetch(`${url}${apikey}&language=en-US${query}&page=1`)
      .then(response => response.json())
      .then(data => {
        dispatch(fetchMovies(data.results));
      });
  };
}

export function emptyCards() {
  return dispatch => {
    return dispatch(fetchMovies([]));
  };
}

export function fetchMovies(movies) {
  return {
    type: "FETCH_MOVIES",
    movies: movies
  };
}
