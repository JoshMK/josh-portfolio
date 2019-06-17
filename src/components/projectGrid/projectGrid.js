import React, {Component} from 'react';
import ProjectBlock from '../projectBlock/ProjectBlock';
import './ProjectGrid.scss';

class projectGrid extends Component {
    render() {
        return (
            <div className='app__project-grid'>
                <h2
                    className={`app__grid-prompt${this.props.projectPromptIsAnimated
                    ? ' app__grid-prompt--flash'
                    : ''}`}>Select Stage
                    <br/>
                    <span className="app__grid-prompt--alt">Press Start</span>
                </h2>
                <div className="columns is-centered is-alternate">
                    <div className="column">
                        <ProjectBlock projectSlug='jesus-always-existed' captionText='divineman' blockImage='divine-man'/>
                    </div>
                    <div className="column">
                        <ProjectBlock projectSlug='san-pedro-fish-market' captionText='fishman' blockImage='fish-man'/>
                    </div>
                </div>
                <div className="columns is-centered">
                    <div className="column">
                        <ProjectBlock projectSlug='ajc' captionText='georgiaman' blockImage='georgia-man'/>
                    </div>
                    <div className="column">
                        <ProjectBlock projectSlug='access-atlanta' captionText='eventman' blockImage='event-man'/>
                    </div>
                </div>
                <div className="columns is-centered is-alternate">
                    <div className="column">
                        <ProjectBlock projectSlug='rare' captionText='newsman' blockImage='news-man'/>
                    </div>
                    <div className="column">
                        <ProjectBlock projectSlug='austin-smiles' captionText='molarman' blockImage='molar-man'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default projectGrid;