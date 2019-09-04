import React, { Component } from 'react';
import './Nav.css';
class Nav extends Component {
	render() {
		return (
			<div className="nav">
				<div className="outerContainer">
					<div className="mainTitle">
						<h1>PAC SUN</h1>
					</div>
					<div className="navContainer">
						<div>Men</div>
						<div>Women</div>
						<div>Jeans</div>
						<div>Swim</div>
						<div>Home</div>
						<div>Brands</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Nav;
