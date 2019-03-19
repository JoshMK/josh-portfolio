import React, {Component} from 'react';
import gridImg from '../../images/project-grid-block.png';
import './ProjectBlock.scss';

class projectBlock extends Component {
    render() {
        return (
            <figure>
                <img className='app__project-block' tabIndex='0' src={gridImg} alt=''/>
                <figcaption className="app__project-name">{this.props.captionText}</figcaption>
            </figure>
        );
    }
}

export default projectBlock;