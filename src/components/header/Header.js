import React, { Component } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import "./Header.scss";

class Header extends Component {
	splitSectionTitle = section => {
		let newSection = "";
		let length = section.length;
		for (let i = 0; i < length; i++) {
			let animType = i % 2 === 0 ? "anim-a" : "anim-b";
			newSection += `<span class="app__header-letter app__header-letter--${animType}">${section[i]}</span>`;
		}
		return { __html: `${newSection}` };
	};

	changeSection = (name, history) => {
		let newName = name === "home" ? "/" : `/${name.toLowerCase()}`;
		history.push(newName);
	};

	render() {
		const pathName = this.props.location.pathname;
		const sectionNames = this.props.sections.names;
		let currentIndex =
			pathName === "/" ? 0 : sectionNames.indexOf(pathName.replace("/", ""));

		return (
			<header>
				<nav className="app__header" aria-label="Primary">
					{this.props.isMobile && (
						<nav className="app__header-button-container">
							{sectionNames.map((section, index) => (
								<Link
									className="app__header-button-link"
									key={`button-section-${index}`}
									onClick={() =>
										this.changeSection(sectionNames[index], this.props.history)
									}
									to={
										sectionNames[index] === "home"
											? "/"
											: `/${sectionNames[index].toLowerCase()}`
									}
								>
									<img
										className="app__header-button-image"
										alt={`${sectionNames[index]}`}
										src={require(`../../images/header-${sectionNames[
											index
										].toLowerCase()}-button.png`)}
									/>
								</Link>
							))}
						</nav>
					)}
					{!this.props.isMobile && (
						<ul className="app__header-sections">
							{sectionNames.map((section, index) => (
								<li
									key={`header-section-${index}`}
									className="app__header-section"
									onClick={() =>
										this.changeSection(sectionNames[index], this.props.history)
									}
								>
									{index !== 2 && (
										<NavLink
											activeStyle={{
												backgroundColor: "white",
												color: "black"
											}}
											exact
											to={
												sectionNames[index] === "home"
													? "/"
													: `/${sectionNames[index].toLowerCase()}`
											}
										>
											{section}
										</NavLink>
									)}
									{index === 2 && (
										<NavLink
											activeStyle={{
												backgroundColor: "white",
												color: "black"
											}}
											to={
												sectionNames[index] === "home"
													? "/"
													: `/${sectionNames[index].toLowerCase()}`
											}
										>
											{section}
										</NavLink>
									)}
								</li>
							))}
						</ul>
					)}
				</nav>
				<div className="app__header-banner">
					<h1
						className="app__header-title"
						dangerouslySetInnerHTML={
							pathName.includes("/projects/")
								? this.splitSectionTitle("projects")
								: sectionNames[currentIndex] === "home" ||
								  sectionNames.indexOf(pathName.replace("/", "")) !== -1
								? this.splitSectionTitle(sectionNames[currentIndex])
								: this.splitSectionTitle("404")
						}
					/>
				</div>
			</header>
		);
	}
}

export default withRouter(Header);
