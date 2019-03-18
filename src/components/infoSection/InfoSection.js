import React, { Component } from 'react';
import './InfoSection.scss';

class InfoSection extends Component {
	setHTML = () => {
		return { __html: this.props.textContent };
	};
	render() {
		return (
			<div className="app__info-section" dangerouslySetInnerHTML={this.setHTML()} />
		);
	}
}

export default InfoSection;