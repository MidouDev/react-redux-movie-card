import React, { Component } from "react";
import { Card } from "./Card";

export default class UpcomingMovies extends Component {
  url = "https://api.themoviedb.org/3/movie/upcoming?api_key=";

  componentDidMount() {
    this.props.loadMovies(this.url);
  }
  render() {
    return (
      <div className="mt-3">
        <div className="container d-flex flex-wrap justify-content-around">
          <Card movieList={this.props.upcomingMovies} />
        </div>
      </div>
    );
  }
}
