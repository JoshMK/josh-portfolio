import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

class MetaData extends Component {
	updateDescription = path => {
		if (path.indexOf("/projects/") !== -1) {
			return "A particular pizzazy project Josh has pontificated over.";
		} else {
			switch (path) {
				case "/":
					return "Joshua Kirwin's amazing online portfolio of mystical wonders.";
				case "/bio":
					return (
						"Everything you ever wanted to know about Joshua Kirwin - minus his favorite pie " +
						"flavor."
					);
				case "/contact":
					return "Get in touch with me, won't you?";
				case "/projects":
					return "A plethora of pizzazy projects Josh has pontificated over.";
				default:
					return "Joshua Kirwin's amazing online portfolio of mystical wonders.";
			}
		}
	};

	render() {
		const sectionTitle = this.props.location.pathname;
		let camelCaseTitle = this.props
			.camelCase(sectionTitle)
			.replace(/-/g, " ")
			.replace("/", "")
			.replace("/", " | ");
		//special case for AJC
		if (camelCaseTitle === "Projects | Ajc") {
			camelCaseTitle = "Projects | AJC";
		}
		return (
			<Helmet>
				<title>{`Joshua Kirwin | ${
					this.props.location.pathname === "/" ? "Home" : camelCaseTitle
				}`}</title>
				<meta
					name="description"
					content={this.updateDescription(this.props.location.pathname)}
				/>
			</Helmet>
		);
	}
}

export default withRouter(MetaData);
