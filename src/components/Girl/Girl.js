import React, { Component } from 'react';
import './Girl.css';
class Girl extends Component {
	render() {
		return (
			<div>
				<div className="womenBanner" />
				<div className="girlHome">
					<div className="leftGirlHome" />
					<div className="rightGirlHome" />
				</div>
				<div />
				<div className="mediumBanner" />
				<div class="dressBanner">
					<div className="leftDress" />
					<div className="rightDress" />
				</div>
				<div className="lastBanner">
					<div className="lastLeft" />
					<div className="lastRight" />
				</div>
				<div>
					<h1>Shop The Feed</h1>
				</div>
				<div>
					<h1>Just for you</h1>
				</div>
			</div>
		);
	}
}

export default Girl;
