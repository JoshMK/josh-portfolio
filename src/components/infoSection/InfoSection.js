import React, { Component } from "react";
import "./InfoSection.scss";

class InfoSection extends Component {
	setHTML = () => {
		return { __html: this.props.subtitle + this.props.textContent };
	};
	render() {
		return (
			<section
				className="app__info-section"
				dangerouslySetInnerHTML={this.setHTML()}
			/>
		);
	}
}

export default InfoSection;
