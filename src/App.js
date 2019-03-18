//React components
import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
//Custom components
import Header from './components/header/Header';
import InfoSection from './components/infoSection/InfoSection';
//audio
import laughTrack from './audio/RDLG-2.mp3';
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
	playSound = sound => {
		sound.play();
	};

	render() {
		let laughSound = new Audio(laughTrack);
		//this.playSound(laughSound);
		//<span class='icon-music' onClick=${() => this.playSound(laughSound)}></span>
		let currentSection = this.state.sections.names[this.state.sectionIndex];
		return (
			<React.Fragment>
				<Header
				sections={this.state.sections}
				currentSection={currentSection}
				changeSection={this.changeSection}
				/>
				<Switch>
					<Route 
					exact 
					path="/"
					render={props => 
						<InfoSection 
						{...props} 
						textContent={
						`<p class='app__info-text'>I don't actually live here.</p>
						<p class='app__info-text'>This is just the landing page for my online portfolio. Check out the other sections to learn more about me and what I've worked on.</p>`
						}
						/>} 
					/>
					<Route 
					exact 
					path="/bio"
					render={props => 
						<InfoSection 
						{...props} 
						textContent={`
						<p class='app__info-text'>I'm a Mary Hardin-Baylor graduate in computer science. I specialize in frontend web development but also have solid backend tech experience.</p>
						<p class='app__info-text'>My frontend tools: HTML, CSS/SCSS, minimalist CSS Frameworks (like Bulma), modern JavaScript (with Babel, Webpack, and all the trimmings), React (with plans to pick up Vue.js on the horizon), and occasionally jQuery. I'm also keen on website accessibility (y'know, stuff like properly structured, semantic markup and 508 compliance)</p> 
						<p class='app__info-text'>My backend tools: NodeJS (writing scripts/tasks), PHP and Twig. I'm also skilled with CMSs like WordPress and CraftCMS. I've dablled in web hosting, DNS Management, and basic SEO to boot.</p>
						`} 
						/>} 
					/>
					<Route 
					exact 
					path="/projects"
					render={props => 
						<InfoSection 
						{...props} 
						textContent={`
						<p class='app__info-text'>I'm a Mary Hardin-Baylor graduate in computer science. I specialize in frontend web development but also have solid backend tech experience.</p>
						`} 
						/>} 
					/>
				</Switch>
    		</React.Fragment>
		);
	}
}

export default App;