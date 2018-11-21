import React, { Component } from "react";
import { connect } from "react-redux";
import SearchPage from "../components/SearchPage";
import { withRouter } from "react-router-dom";
import * as actionCreators from "../redux/actions/index";

class SearchPageContainer extends Component {
  render() {
    return (
      <SearchPage
        searchedMovie={this.props.movies}
        loadMovies={this.props.callMovies}
        loadEmpty={this.props.emptyCards}
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
  )(SearchPageContainer)
);
