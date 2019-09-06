import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Views/Home/Home";
import SingleItem from "./Views/SingleItem/SingleItem";
import Men from "./Views/Men/Men";
import Women from "./Views/Women/Women";
import Search from "./components/Search/Search";
export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={Men} exact path="/men" />
    <Route component={Women} exact path="/women" />
    <Route component={Search} exact path="/search" />
    <Route
      path="/item/:id"
      component={props => (
        <SingleItem timestamp={new Date().toString()} {...props} />
      )}
    />
  </Switch>
);
