import React, { Component } from "react";
import { connect } from "react-redux";
import UpcomingMovies from "../components/UpcomingMovies";
import { withRouter } from "react-router-dom";
import * as actionCreators from "../redux/actions/index";

class UpcomingMoviesContainer extends Component {
  render() {
    return (
      <UpcomingMovies
        upcomingMovies={this.props.movies}
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
  )(UpcomingMoviesContainer)
);
