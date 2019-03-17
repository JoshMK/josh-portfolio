//React components
import React, { Component } from 'react';
import { Route } from "react-router-dom";
//Custom components
import Header from './components/header/Header';
import InfoSection from './components/infoSection/InfoSection';
//global styles
import './App.scss';

class App extends Component {
	state = {
		sections: {
			names: ['Home', 'Bio', 'Projects', 'Contact'],
			colors: []
		},
		sectionIndex: 0
	};
	changeSection = index => {
		this.setState({
			sectionIndex: index
		});
	};
	render() {
		let currentSection = this.state.sections.names[this.state.sectionIndex];
		return (
			<React.Fragment>
				<Header
				sections={this.state.sections}
				currentSection={currentSection}
				changeSection={this.changeSection}
				/>
				<Route 
				exact 
				path="/"
				render={props => <InfoSection {...props} textContent={"<p>I don't actually live here. This is just a landing page for my online portfolio.</p><p>Check out the other sections to learn more about me and my work.</p>"} />} 
				/>
    		</React.Fragment>
		);
	}
}

export default App;