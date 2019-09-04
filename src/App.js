import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import { HashRouter } from 'react-router-dom';
import routes from './routes';
import Footer from './components/Footer/Footer';
import { Provider } from 'react-redux';
import store from './redux/store';
class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<HashRouter>
					<Nav />
					{routes}
					<Footer />
				</HashRouter>
			</Provider>
		);
	}
}

export default App;
