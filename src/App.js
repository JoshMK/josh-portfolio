//React components
import React, { Component } from 'react';
//Custom components
import Header from './components/header/Header';
import InfoSection from './components/infoSection/InfoSection';
//global styles
import './App.scss';

class App extends Component {
	state = {
		sections: ['Home', 'Bio', 'Projects', 'Contact'],
		sectionIndex: 0
	};
	render() {
		let currentSection = this.state.sections[this.state.sectionIndex];
		return (
			<div>
				<Header
				sections={this.state.sections}
				currentSection={currentSection}
				/>
				<InfoSection
				textContent="I don't actually live here. This is just a landing page for my online portfolio." 
				/>
			</div>
		);
	}
}

export default App;