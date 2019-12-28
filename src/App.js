//React components
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import posed, { PoseGroup } from "react-pose";
//Custom components
import whatInput from "what-input";
import SkipNavLink from "./components/skipNavLink/SkipNavLink";
import MetaData from "./components/metaData/MetaData";
import Header from "./components/header/Header";
import InfoSection from "./components/infoSection/InfoSection";
import ProjectGrid from "./components/projectGrid/ProjectGrid";
import ProjectSummary from "./components/projectSummary/ProjectSummary";
import Footer from "./components/footer/Footer";
//audio import laughTrack from './audio/RDLG-2.mp3'; global styles
import "./App.scss";
import { hidden } from "ansi-colors";
//google analytics
import Analytics from "react-router-ga";

class App extends Component {
	state = {
		sections: {
			names: ["home", "bio", "projects", "contact"]
		},
		subsections: {
			names: [
				"Jesus Always Existed",
				"AJC",
				"Rare",
				"San Pedro Fish Market",
				"Access Atlanta",
				"Austin Smiles"
			],
			slugs: [
				"jesus-always-existed",
				"ajc",
				"rare",
				"san-pedro-fish-market",
				"access-atlanta",
				"austin-smiles"
			],
			urls: [
				"https://jesusalwaysexisted.com/",
				"https://www.ajc.com/",
				"https://rare.us/",
				"https://www.sanpedrofish.com/",
				"https://new.accessatlanta.com/",
				"https://austinsmiles.org/"
			],
			tech: [
				"ES6, Sass, Bulma, Webpack, PHP, Twig, Craft 3, Hyperlane",
				"ES6, Sass, BlueConic",
				"ES6, Sass, PHP, WordPress, wpVIP.com",
				"ES6, Sass, Foundation, PHP, Twig, Craft 2, Craft Commerce, Authorize.net",
				"ES6, React, NodeJS, Sass, Webpack, WordPress",
				"ES5, Sass, PHP, WordPress, Salsa CMS"
			],
			facts: [
				"The co-founder / CEO of Hyperlane contacted and chatted with me while I was work" +
					"ing on this project. He's a nice guy. Would highly recommend the hosting platfor" +
					"m.",
				"I did the coding and designs for most of the modals on this site. Now you know w" +
					"ho to blame when you go there and see something telling you to subscribe or disa" +
					"ble your adblocker.",
				"The site originally had a 'Rare Reviews' section under the 'Entertainment' categ" +
					"ory. I made a cool template for it that allowed content editors to embed videos," +
					" populate fields with show season / episode metadata via IMDB, and easily cycle " +
					"through posts based on topic (i.e. 'The Punisher', 'Stranger Things'). Shame it " +
					"doesn't exist anymore.",
				"Graphics/mockups aside, I created and launched this entire site in eight months " +
					"time. Yes, I somehow managed to implement a fully-functional ecommerce platform " +
					"and user management system on top of the front-end components in less than a yea" +
					"r. I spent many sleepless nights testing things, migrating user data from the pr" +
					"evious site (which was in WordPress), and longing for the cold peace of the grav" +
					"e. All in all, it turned out pretty nicely.",
				"One of this project's git branches has some code in it that dynamically pulls col" +
					"ors and images from a design platform via a NodeJS task. Yep, that was me. Each " +
					"neighborhood on the site was supposed to have its own header image and color the" +
					"me, but I never got to merge things before my last day of work.",
				"This is a great charity that you should donate to. What do you mean that's more " +
					"of a 'fun opinion'? Pff, whatever Mr./Mrs. Pedantic."
			],
			images: [
				"project-1-screen",
				"project-3-screen",
				"project-6-screen",
				"project-2-screen",
				"project-4-screen",
				"project-5-screen"
			],
			imagesText: [
				"homepage screenshot of the Jesus Always Existed website",
				"homepage screenshot of the Atlanta Journal Constitution website",
				"homepage screenshot of the Rare.us website",
				"homepage screenshot of the San Pedro Fish Market website",
				"homepage screenshot of the Access Atlanta website",
				"homepage screenshot of the Austin Smiles website"
			]
		},
		isMobile: true,
		promptIsAnimated: false
	};

	checkIsMobile = () => {
		if (window.innerWidth > 768) {
			this.setState({ isMobile: false });
		} else {
			this.setState({ isMobile: true });
		}
	};

	playSound = sound => {
		sound.play();
	};

	animateProjectPrompt = setInterval(() => {
		this.setState({
			projectPromptIsAnimated: !this.state.projectPromptIsAnimated
		});
	}, 500);

	camelCase = str => {
		return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
			if (+match === 0) return ""; //
			return index === 0 ? match.toLowerCase() : match.toUpperCase();
		});
	};

	componentDidMount() {
		window.addEventListener("resize", this.checkIsMobile);
		this.checkIsMobile();
	}

	componentWillUnmount() {
		//unmount all events
		clearInterval(this.animateProjectPrompt);
		window.removeEventListener("resize", this.checkIsMobile);
	}

	render() {
		// <p class='app__info-text'><span class='app__info-text--em'>Carrier Pigeon:
		// </span> <a class='app__info-icon icon-bird' href=''></a></p> let laughSound =
		// new Audio(laughTrack); this.playSound(laughSound); <span class='icon-music'
		// onClick=${() => this.playSound(laughSound)}></span>
		//
		const RouteContainer = posed.div({
			enter: {
				scaleY: 1,
				delay: 5000,
				overflow: hidden,
				transformOrigin: "top center",
				beforeChildren: true
			},
			exit: {
				overflow: hidden,
				transformOrigin: "bottom center",
				scaleY: 0
			}
		});
		return (
			<React.Fragment>
				<MetaData camelCase={this.camelCase} />
				<SkipNavLink />
				<Header sections={this.state.sections} isMobile={this.state.isMobile} />
				{/*<PoseGroup>*/}
				{/*<RouteContainer key={location.pathname}>*/}
				<Analytics id="UA-133446660-2">
					<main id="main">
						<Switch>
							<Route
								exact
								path="/"
								render={() => (
									<InfoSection
										subtitle={`<h2 class='app__info-text app__info-text--subtitle'>I Don't Actually Live Here</h2>`}
										textContent={`<p class='app__info-text'>This is just the landing page for my online portfolio. Check out the other sections to learn more about me and what I've worked on.</p>`}
									/>
								)}
							/>
							<Route
								exact
								path="/bio"
								render={() => (
									<InfoSection
										subtitle={`<h2 class='app__info-text app__info-text--subtitle'>Who am I?</h2>`}
										textContent={`<p class='app__info-text'>Just a Mary Hardin-Baylor graduate in computer science. I specialize in frontend web development but have solid backend tech experience as well.</p> <p class='app__info-text'><span class='app__info-text--em'>My frontend tools:</span> HTML, CSS/SCSS, minimalist CSS Frameworks (like Bulma), modern JavaScript (with Babel, Webpack, and all the trimmings), React, Next.js, and occasionally jQuery. I'm also keen on website accessibility (y'know, stuff like semantic markup, WCAG, and 508 compliance.)</p> <p class='app__info-text'><span class='app__info-text--em'>My backend tools:</span> NodeJS (writing scripts/tasks), PHP and Twig. I'm also proficient with CMSs like WordPress, Craft, and Kentico.</p> <p class='app__info-text'><span class='app__info-text--em'>Misc. skills:</span> web hosting, DNS Management, optimization, and basic SEO. I'd be a jack-of-all-trades if my name wasn't 'Josh'.</p> `}
									/>
								)}
							/>
							<Route
								exact
								path="/projects"
								render={() => (
									<React.Fragment>
										<InfoSection
											subtitle={`<h2 class='app__info-text app__info-text--subtitle'>My Work</h2>`}
											textContent={`<p class='app__info-text'>Any resemblance this has to a classic videogame is sheer coincidence.</p> `}
										/>
										<ProjectGrid
											camelCase={this.camelCase}
											projectPromptIsAnimated={
												this.state.projectPromptIsAnimated
											}
										/>
									</React.Fragment>
								)}
							/>{" "}
							{this.state.subsections.slugs.map((slug, index) => (
								<Route
									key={`this.state.subsections.slugs-${index}`}
									path={`/projects/${slug}`}
									render={() => (
										<ProjectSummary
											scroll={slug === "san-pedro-fish-market" ? true : false}
											projectLink={this.state.subsections.urls[index]}
											projectFact={this.state.subsections.facts[index]}
											projectTech={this.state.subsections.tech[index]}
											projectName={this.state.subsections.names[index]}
											projectAltText={this.state.subsections.imagesText[index]}
											projectImage={this.state.subsections.images[index]}
										/>
									)}
								/>
							))}
							<Route
								exact
								path="/contact"
								render={() => (
									<InfoSection
										subtitle={`<h2 class='app__info-text app__info-text--subtitle'>Get in Touch</h2>`}
										textContent={`<p class='app__info-text'><span class='app__info-text--em'>E-mail:</span> <a class='app__info-icon icon-envelop' href='mailto:joshuakirwin@gmail.com' class='icon-envelop'></a></p> <p class='app__info-text'><span class='app__info-text--em'>LinkedIn:</span> <a class='app__info-icon icon-linkedin' href='https://www.linkedin.com/in/joshua-kirwin/' target='_blank'></a></p>`}
									/>
								)}
							/>
							<Route
								render={() => (
									<InfoSection
										subtitle={`<h2 class='app__info-text app__info-text--subtitle'>Sorry</h2>`}
										textContent={`<p class='app__info-text'>Page not found. Someone should go look for her.</p>`}
									/>
								)}
							/>
						</Switch>
					</main>
				</Analytics>
				{/*</RouteContainer>*/}
				{/*</PoseGroup>*/}
				<Footer />
			</React.Fragment>
		);
	}
}

export default App;
