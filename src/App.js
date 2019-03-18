//React components
import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
//Custom components
import Header from './components/header/Header';
import InfoSection from './components/infoSection/InfoSection';
import ProjectGrid from './components/projectGrid/projectGrid';
//audio
import laughTrack from './audio/RDLG-2.mp3';
//global styles
import './App.scss';
//austinsmiles.org - molarman
//sanpedrofish.com - fishman
//ajc.com - georgiaman
//accessatlanta.com - eventman
//rare.us - newsman
//jesusalwaysexisted.com - divineman

class App extends Component {
	state = {
		sections: {
			names: ['Home', 'Bio', 'Projects', 'Contact']
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
						<p class='app__info-text'>I'm a Mary Hardin-Baylor graduate in computer science. I specialize in frontend web development but have solid backend tech experience.</p>
						<p class='app__info-text'><span class='app__info-text--em'>My frontend tools:</span> HTML, CSS/SCSS, minimalist CSS Frameworks (like Bulma), modern JavaScript (with Babel, Webpack, and all the trimmings), React (with plans to pick up Vue.js on the horizon), and occasionally jQuery. I'm also keen on website accessibility (y'know, stuff like properly structured, semantic markup and 508 compliance.)</p> 
						<p class='app__info-text'><span class='app__info-text--em'>My backend tools:</span> NodeJS (writing scripts/tasks), PHP and Twig. I'm also proficient with CMSs like WordPress and Craft.</p>
						<p class='app__info-text'><span class='app__info-text--em'>Misc. skills:</span> web hosting, DNS Management, optimization, and basic SEO. I'd be a jack-of-all-trades if my name wasn't 'Josh'.</p>
						`} 
						/>} 
					/>
					<Route 
					exact 
					path="/projects"
					render={props => 
						<React.Fragment>
						<InfoSection 
						{...props} 
						textContent={`
						<p class='app__info-text'>Any resemblance between this section and a classic videogame is completely coincidental.</p>
						`} 
						/>
						<ProjectGrid
						{...props} 
						textContent={`
						<p class='app__info-text'>Any resemblance between this section and a classic videogame is completely coincidental.</p>
						`} 
						/>
						</React.Fragment>
					}/>  
		</Switch>
		</React.Fragment>
	);
}
}

export default App;