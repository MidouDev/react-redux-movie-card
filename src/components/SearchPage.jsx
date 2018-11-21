import React, { Component } from "react";
import { Cards } from "./Cards";

export default class SearchPage extends Component {
  url = "https://api.themoviedb.org/3/search/movie?api_key=";
  query = "&query=";

  componentDidMount() {
    console.log(this.props.searchedMovie);
    this.props.loadEmpty();
  }

  render() {
    let input;
    return (
      <div className="mt-3">
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            this.props.loadMovies(this.url, this.query + input.value);
            input.value = "";
          }}
        >
          <div className="form-group mx-auto" style={{ width: "80%" }}>
            <input
              className="form-control mr-sm-2"
              placeholder="Search"
              ref={node => (input = node)}
            />
          </div>
          <button
            className="btn btn-outline-primary my-2 my-sm-0"
            type="submit"
            style={{ display: "none" }}
          >
            Search
          </button>
        </form>

        <div className="container d-flex flex-wrap justify-content-around">
          <Cards movieList={this.props.searchedMovie} />
        </div>
      </div>
    );
  }
}
