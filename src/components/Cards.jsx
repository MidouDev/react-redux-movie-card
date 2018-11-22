import React from "react";
import "../styles/Cards.css";
import { NavLink } from "react-router-dom";

export const Cards = ({ movieList }) =>
  movieList.map(movie => (
    <div className="card mb-2" key={movie.id}>
      <img
        className="card-img-top"
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt={movie.title}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Release date : {movie.release_date}
        </h6>
        <h6 className="card-subtitle mb-2 text-muted">
          Vote count :{" "}
          <span className="badge badge-secondary">{movie.vote_count}</span>
        </h6>
        <h6 className="card-subtitle mb-2 text-muted">
          Vote average :{" "}
          <span className="badge badge-primary">{movie.vote_average}</span>
        </h6>

        <div className="card-footer">
          <NavLink
            to={{ pathname: "/description", state: { movie: movie } }}
            className="btn btn-primary btn-block"
          >
            Movie description
          </NavLink>
        </div>
      </div>
    </div>
  ));
