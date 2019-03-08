import React, { Component } from 'react';

class InfoSection extends Component {
	render() {
		return (
			<div>
			<p>{this.props.textContent}</p>
			</div>
		);
	}
}

export default InfoSection;