import { apikey } from "../../api/apikey";

export function callMovies(url) {
  return dispatch => {
    return fetch(`${url}${apikey}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => {
        dispatch(fetchMovies(data.results));
      });
  };
}

export function fetchMovies(movies) {
  return {
    type: "FETCH_MOVIES",
    movies: movies
  };
}
