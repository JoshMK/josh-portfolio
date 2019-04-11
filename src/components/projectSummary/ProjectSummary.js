import React, {Component} from 'react';
import './ProjectSummary.scss';

class ProjectSummary extends Component {
    render() {
        return (
            <div>
                <h2>Jesus Always Existed</h2>
                <img className='app__project-image' src={require(`../../images/${this.props.projectImage}.png`)} alt=''/>
            </div>
        );
    }
}

export default ProjectSummary;