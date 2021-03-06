import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { HomePage } from "../components/HomePage";
import PopularMoviesContainer from "../containers/PopularMoviesContainer";
import UpcomingMoviesContainer from "../containers/UpcomingMoviesContainer";
import Header from "../components/Header";

export const AppRouter = () => (
  <BrowserRouter>
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/popular" component={PopularMoviesContainer} />
        <Route path="/upcoming" component={UpcomingMoviesContainer} />
        <Redirect to="/" />
      </Switch>
    </Fragment>
  </BrowserRouter>
);
