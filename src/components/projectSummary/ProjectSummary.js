import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './ProjectSummary.scss';

class ProjectSummary extends Component {
    render() {
        return (
            <section className='app__project-summary'>
                <div className='app__project-image-container'>
                    <h2 className='app__project-title'>
                        <Link className='app__project-nav' to='../projects'>Projects</Link> / Jesus Always Existed</h2>
                    <img
                        className='app__project-image'
                        src={require(`../../images/${this.props.projectImage}.png`)}
                        alt=''/>
                </div>
                <div className='app__project-text-container'>
                <a className='app__project-web-link' href='https://jesusalwaysexisted.com/' target='_blank'>Visit Website</a>
                <p>Tech used:</p>
                </div>
            </section>
        );
    }
}

export default ProjectSummary;