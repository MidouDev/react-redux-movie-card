import React from "react";

export const Cards = ({ movieList }) =>
  movieList.map(movie => (
    <div
      className="card mb-2"
      style={{ width: "21rem", height: "100%" }}
      key={movie.id}
    >
      <img
        className="card-img-top"
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt={movie.title}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{movie.release_date}</h6>
        <p className="card-text">{movie.overview}</p>
        <a href="#" className="btn btn-primary">
          More info
        </a>
      </div>
    </div>
  ));
