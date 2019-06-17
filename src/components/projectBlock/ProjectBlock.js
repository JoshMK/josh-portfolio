import React, {Component} from 'react';
import {Link} from "react-router-dom";
import gridImg from '../../images/project-grid-block.png';
import './ProjectBlock.scss';

class projectBlock extends Component {
    render() {
        const projectName = this
            .props
            .projectSlug
            .replace('-', ' ');
        const robot = require(`../../images/${this.props.blockImage}.png`);
        return (
            <figure>
                <Link className='app__project-link' to={`/projects/${this.props.projectSlug}`}>
                    <img
                        className='app__project-block'
                        tabIndex='0'
                        src={gridImg}
                        alt={`${projectName}`}/>
                    <div
                        className='app__project-block-image'
                        style
                        ={{
                        backgroundImage: `url(${robot})`
                    }}></div>
                </Link>
                <figcaption className="app__project-name">{this.props.captionText}</figcaption>
            </figure>
        );
    }
}

export default projectBlock;