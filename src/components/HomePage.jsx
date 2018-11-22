import React from "react";
import "../styles/HomePage.css";

export const HomePage = () => (
  <div className="jumbotron m-2">
    <h1 className="display-5">React Redux MovieCard</h1>
    <p className="lead">
      It is a practice project, to learn and use some of Reactjs Features and
      dependencies
    </p>
    <hr className="my-4" />
    <p>
      The idea of the project is to make HTTP calls to themoviedb REST api using
      the generated apikey. <br />
      Using the retrieved data, I made movie cards containing some of the movies
      information, sorting by popularity and date of movies.
    </p>
    <div>
      In this project I used :
      <ul>
        <li>Create-react-app</li>
        <li>Redux and React Redux</li>
        <li>React Router</li>
        <li>themoviedb REST api</li>
        <li>Bootstrap and fontawesome</li>
      </ul>
    </div>
    <p className="lead">
      <a
        className="btn btn-primary btn-lg"
        href="https://github.com/MidouDev/react-redux-movie-card"
        role="button"
      >
        Project repository on github
      </a>
    </p>
  </div>
);
