import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Header.scss';

class Header extends Component {
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
				<h1 className="app__header-banner-title">{this.props.currentSection}</h1>
				</div>
			</header>
		);
	}
}

export default Header;