import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import { HashRouter } from 'react-router-dom';
import routes from './routes';
import Footer from './components/Footer/Footer';
class App extends Component {
	render() {
		return (
			<HashRouter>
				<Nav />
				{routes}
				<Footer />
			</HashRouter>
		);
	}
}

export default App;
