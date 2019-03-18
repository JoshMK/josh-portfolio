import React, { Component } from 'react';
import ProjectBlock from '../projectBlock/ProjectBlock';
import './ProjectGrid.scss';

class projectGrid extends Component {
	render() {
		return (
			<div className='app__project-grid'>
			<h2 className={`app__grid-prompt${this.props.promptIsAnimated ? ' app__grid-prompt--flash' : ''}`}>Select Stage
			<br/><span className="app__grid-prompt-alt">Press Start</span></h2>
			<div className="columns is-centered is-alternate">
			<div className="column">
				<ProjectBlock
				captionText='fishman'
				/>
			</div>
			<div className="column">
				<ProjectBlock
				captionText='molarman'
				/>
			</div>
			</div>
			<div className="columns is-centered">
			<div className="column">
				<ProjectBlock
				captionText='georgiaman'
				/>
			</div>
			<div className="column">
				<ProjectBlock
				captionText='eventman'
				/>
			</div>
			</div>
			<div className="columns is-centered is-alternate">
			<div className="column">
				<ProjectBlock
				captionText='newsman'
				/>
			</div>
			<div className="column">
				<ProjectBlock
				captionText='divineman'
				/>
			</div>
			</div>
			</div>
		);
	}
}

export default projectGrid;