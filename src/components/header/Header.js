import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Header.scss';

class Header extends Component {

	splitSectionTitle = section => {
		let newSection = '';
		let length = section.length;
		for (let i = 0; i < length; i++) {
			let animType = i % 2 === 0 ? 'anim-a' : 'anim-b';
			newSection += `<span class="app__header-letter app__header-letter--${animType}">${section[i]}</span>`;
		}
		return { __html: `${newSection}` };
	};
	render() {

		return (
			<header>
				<nav className="app__header">
				<ul className="app__header-sections">
				{this.props.sections.names.map((section, index) => 
					<Router key={`header-section-${index}`}>
					<li className="app__header-section" onClick={() => this.props.changeSection(index)}>
						<Link to={this.props.sections.names[index] === 'Home' ? '/' : this.props.sections.names[index].toLowerCase()}>
						{section}
						</Link>
						<span className="app__header-section-pointer"></span>
					</li>
					</Router>
					)}
				</ul>
				</nav>
				<div className="app__header-banner">
				<h1 className="app__header-title" dangerouslySetInnerHTML={this.splitSectionTitle(this.props.currentSection)}/>
				</div>
			</header>
		);
	}
}

export default Header;