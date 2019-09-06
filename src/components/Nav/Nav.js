import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCart } from '../../redux/ducks/itemReducer';
import Search from '../Search/Search';
class Nav extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.getCart();
	}
	render() {
		console.log(this.props.itemReducer.cart);
		return (
			<div className="nav">
				<div className="topOfNav">
					<Search />
				</div>
				<div className="outerContainer">
					<div className="mainTitle">
						<Link to="/">
							{' '}
							<h1 style={{ letterSpacing: '1em' }}>PACSUN</h1>
						</Link>
					</div>
					<div className="navContainer">
						<Link to="/men">
							{' '}
							<div>Men</div>
						</Link>
						<Link to="/women">
							{' '}
							<div>Women</div>
						</Link>
						<div>Jeans</div>
						<div>Swim</div>
					</div>{' '}
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => state;
export default connect(mapStateToProps, { getCart })(Nav);
