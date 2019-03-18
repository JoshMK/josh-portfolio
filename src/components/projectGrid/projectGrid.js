import React, { Component } from 'react';
import ProjectBlock from '../projectBlock/ProjectBlock';

class projectGrid extends Component {
	render() {
		return (
			<div className='app__project-grid'>
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
				captionText='infoman'
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