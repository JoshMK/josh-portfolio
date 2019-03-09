import React, { Component } from 'react';
import './InfoSection.scss';

class InfoSection extends Component {
	render() {
		return (
			<div className="app__info-section">
			<p className="app__info-text">{this.props.textContent}</p>
			</div>
		);
	}
}

export default InfoSection;