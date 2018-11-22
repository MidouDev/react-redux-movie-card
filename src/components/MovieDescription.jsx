import React from "react";
import "../styles/MovieDescription.css";

export const MovieDescription = props => {
  const { movie } = props.location.state;

  return (
    <div className="jumbotron m-2">
      <div className="text-center">
        <img
          className="movie-image mb-3"
          src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
          alt={movie.title}
        />
      </div>
      <h1 className="display-5 text-center" id="movie-title">
        {movie.title}
      </h1>
      <hr className="my-4" />
      <p className="lead text-justify" id="movie-descr">
        {movie.overview}
      </p>
      <div>
        <ul className="list-group list-group-flush" id="descr-list">
          <li className="list-group-item">
            <span>Release date : </span>
            {movie.release_date}
          </li>
          <li className="list-group-item">
            <span>Popularity : </span>
            {movie.popularity}
          </li>
          <li className="list-group-item">
            <span>Vote count : </span>
            {movie.vote_count}
          </li>
          <li className="list-group-item">
            <span>Vote average : </span>
            {movie.vote_average}
          </li>
        </ul>
      </div>
      <p className="text-danger text-center font-weight-bold mt-2">
        Actors and producers data will be available soon ...
      </p>
    </div>
  );
};
