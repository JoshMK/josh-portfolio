import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
	render() {
		return (
			<header>
				<nav className="app__header">
				<ul className="app__header-sections">
				{this.props.sections.map((section, index) => 
					<li className="app__header-section" key={`header-section-${index}`}>{section}<span className="app__header-section-pointer"></span></li>
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