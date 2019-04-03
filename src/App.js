//React components
import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import posed, {PoseGroup} from 'react-pose';
//Custom components
import MetaData from './components/metaData/MetaData'
import Header from './components/header/Header';
import InfoSection from './components/infoSection/InfoSection';
import ProjectGrid from './components/projectGrid/ProjectGrid';
//audio import laughTrack from './audio/RDLG-2.mp3'; global styles
import './App.scss';
import {hidden} from 'ansi-colors';

class App extends Component {
    state = {
        sections: {
            names: ['home', 'bio', 'projects', 'contact']
        },
        isMobile: true,
        promptIsAnimated: false
    };
    checkIsMobile = () => {
        if (window.innerWidth > 768) {
            this.setState({isMobile: false});
        } else {
            this.setState({isMobile: true});
        }
    };
    playSound = sound => {
        sound.play();
    };
    animateProjectPrompt = setInterval(() => {
        this.setState({
            projectPromptIsAnimated: !this.state.projectPromptIsAnimated
        });
    }, 300);

    componentDidMount() {
        window.addEventListener('resize', this.checkIsMobile);
        this.checkIsMobile();
    }

    componentWillUnmount() {
        //unmount all events
        clearInterval(this.animateProjectPrompt);
        window.removeEventListener('resize', this.checkIsMobile);
    }

    render() {
        // let laughSound = new Audio(laughTrack); this.playSound(laughSound); <span
        // class='icon-music' onClick=${() => this.playSound(laughSound)}></span>
        //
        const RouteContainer = posed.div({
            enter: {
                scaleY: 1,
                delay: 5000,
                overflow: hidden,
                transformOrigin: 'top center',
                beforeChildren: true
            },
            exit: {
                overflow: hidden,
                transformOrigin: 'bottom center',
                scaleY: 0
            }
        });
        return (
            <React.Fragment>
                <MetaData/>
                <Header sections={this.state.sections} isMobile={this.state.isMobile}/> {/*<PoseGroup>*/}
                {/*<RouteContainer key={location.pathname}>*/}
                <Switch>
                    <Route
                        exact
                        path='/'
                        render={() => <InfoSection
                        textContent={`<p class='app__info-text'>I don't actually live here.</p> <p class='app__info-text'>This is just the landing page for my online portfolio. Check out the other sections to learn more about me and what I've worked on.</p>`}/>}/>
                    <Route
                        exact
                        path='/bio'
                        render={() => <InfoSection
                        textContent={`<p class='app__info-text'>I'm a Mary Hardin-Baylor graduate in computer science. I specialize in frontend web development but have solid backend tech experience as well.</p> <p class='app__info-text'><span class='app__info-text--em'>My frontend tools:</span> HTML, CSS/SCSS, minimalist CSS Frameworks (like Bulma), modern JavaScript (with Babel, Webpack, and all the trimmings), React (with plans to pick up Vue.js on the horizon), and occasionally jQuery. I'm also keen on website accessibility (y'know, stuff like properly structured, semantic markup and 508 compliance.)</p> <p class='app__info-text'><span class='app__info-text--em'>My backend tools:</span> NodeJS (writing scripts/tasks), PHP and Twig. I'm also proficient with CMSs like WordPress and Craft.</p> <p class='app__info-text'><span class='app__info-text--em'>Misc. skills:</span> web hosting, DNS Management, optimization, and basic SEO. I'd be a jack-of-all-trades if my name wasn't 'Josh'.</p> `}/>}/>
                    <Route
                        exact
                        path='/projects'
                        render={() => <React.Fragment>
                        <InfoSection
                            textContent={`<p class='app__info-text'>Any resemblance between this section and a classic videogame is completely coincidental.</p> `}/>
                        <ProjectGrid projectPromptIsAnimated={this.state.projectPromptIsAnimated}/>
                    </React.Fragment>}/>
                    <Route
                        path='/projects'
                        render={() => <InfoSection
                        textContent={`<p class='app__info-text'>Test</p> `}/>}/>
                    <Route
                        exact
                        path='/contact'
                        render={() => <InfoSection
                        textContent={`<p class='app__info-text'><span class='app__info-text--em'>E-mail:</span> <a class='app__info-icon icon-envelop' href='' class='icon-envelop'></a></p> <p class='app__info-text'><span class='app__info-text--em'>LinkedIn:</span> <a class='app__info-icon icon-linkedin' href='https://www.linkedin.com/in/joshua-kirwin/' target='_blank'></a></p> <p class='app__info-text'><span class='app__info-text--em'>Carrier Pigeon: </span> <a class='app__info-icon icon-bird' href=''></a></p>`}/>}/>
                    <Route
                        render={() => <InfoSection
                        textContent={`<p class='app__info-text'>Sorry, no pages to be found here.</p>`}/>}/>
                </Switch>
                {/*</RouteContainer>*/}
                {/*</PoseGroup>*/}
            </React.Fragment>
        );
    }
}

export default App;