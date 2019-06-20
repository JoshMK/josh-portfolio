import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './ProjectSummary.scss';

class ProjectSummary extends Component {
    scrollToTop = () => {
        const scroll = require('react-scroll');
        scroll
            .animateScroll
            .scrollToTop({duration: 250});
    };
    componentDidMount() {
        this.scrollToTop();
    }
    render() {
        return (
            <section className='app__project-summary'>
                <div className='app__project-image-container'>
                    <h2 className='app__project-title'>
                        <Link className='app__project-nav' to='../projects'>Projects</Link> / {this.props.projectName}</h2>
                    <a href={this.props.projectLink} target='_blank' rel='noreferrer noopener'>
                        <img
                            className='app__project-image'
                            src={require(`../../images/${this.props.projectImage}.png`)}
                            alt={this.props.projectAltText}/>
                    </a>
                </div>
                <div
                    className={`app__project-text-container${this.props.scroll
                    ? ' app__project-text-container--scroll'
                    : ''}`}>
                    <a
                        className='app__project-web-link'
                        href={this.props.projectLink}
                        target='_blank'
                        rel='noreferrer noopener'>Visit Website</a>
                    <p className='app__project-text'>Tech used:</p>
                    <p className='app__project-text app__project-text--alt'>{this.props.projectTech}</p>
                    <p className='app__project-text'>Fun Fact:</p>
                    <p className='app__project-text app__project-text--alt'>{this.props.projectFact}</p>
                </div>
            </section>
        );
    }
}

export default ProjectSummary;