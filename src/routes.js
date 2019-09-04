import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Views/Home/Home';
import SingleItem from './Views/SingleItem/SingleItem';
export default (
	<Switch>
		<Route component={Home} exact path="/" />
		<Route path="/item/:id" component={(props) => <SingleItem timestamp={new Date().toString()} {...props} />} />
	</Switch>
);
