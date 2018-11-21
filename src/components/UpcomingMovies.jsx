import React, { Component } from "react";
import { Cards } from "./Cards";

export default class UpcomingMovies extends Component {
  url = "https://api.themoviedb.org/3/movie/upcoming?api_key=";
  query = "";

  componentDidMount() {
    this.props.loadMovies(this.url, this.query);
  }
  render() {
    return (
      <div className="mt-3">
        <div className="container d-flex flex-wrap justify-content-around">
          <Cards movieList={this.props.upcomingMovies} />
        </div>
      </div>
    );
  }
}
