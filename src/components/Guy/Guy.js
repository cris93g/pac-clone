import React, { Component } from 'react';
import './Guy.css';
class Guy extends Component {
	render() {
		return (
			<div className="guyWrapper">
				<div className="guyTop" />
				<div className="girlHome">
					<div className="leftGuyHome" />
					<div className="rightGuyHome" />
				</div>
				<div className="mediumBannerG" />
				<div class="dressBanner">
					<div className="leftGuy" />
					<div className="rightGuy" />
				</div>
				<div className="lastBanner">
					<div className="lastGuyL" />
					<div className="lastGuyR" />
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

export default Guy;
