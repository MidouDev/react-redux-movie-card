import React, { Component } from "react";
import { connect } from "react-redux";
import PopularMovies from "../components/PopularMovies";
import { withRouter } from "react-router-dom";
import * as actionCreators from "../redux/actions/index";

class PopularMoviesContainer extends Component {
  render() {
    return (
      <PopularMovies
        popularMovies={this.props.movies}
        loadMovies={this.props.callMovies}
      />
    );
  }
}

const mapStateToProps = state => {
  return state.moviesReducer;
};

export default withRouter(
  connect(
    mapStateToProps,
    actionCreators
  )(PopularMoviesContainer)
);
