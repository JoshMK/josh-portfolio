import React, { Component } from "react";
import { Link } from "react-router-dom";
import gridImg from "../../images/project-grid-block.png";
import "./ProjectBlock.scss";

class projectBlock extends Component {
	render() {
		const projectAltTextOld = this.props
			.camelCase(this.props.projectSlug)
			.replace(/-/g, " ");
		let projectAltTextNew =
			projectAltTextOld.charAt(0).toUpperCase() + projectAltTextOld.slice(1);
		if (projectAltTextNew === "Ajc") {
			projectAltTextNew = "AJC";
		}
		const robot = require(`../../images/${this.props.blockImage}.png`);
		return (
			<figure>
				<Link
					className="app__project-link"
					to={`/projects/${this.props.projectSlug}`}
				>
					<img
						className="app__project-block"
						src={gridImg}
						alt={`Learn about work done on the ${projectAltTextNew} website.`}
					/>
					<div
						className="app__project-block-image"
						style={{
							backgroundImage: `url(${robot})`
						}}
					></div>
				</Link>
				<figcaption className="app__project-name">
					{this.props.captionText}
				</figcaption>
			</figure>
		);
	}
}

export default projectBlock;
