import React, {Component} from 'react';
import {NavLink, Link, withRouter} from "react-router-dom";
import './Header.scss';

class Header extends Component {

    splitSectionTitle = section => {
        let newSection = '';
        let length = section.length;
        for (let i = 0; i < length; i++) {
            let animType = i % 2 === 0
                ? 'anim-a'
                : 'anim-b';
            newSection += `<span class="app__header-letter app__header-letter--${animType}">${section[i]}</span>`;
        }
        return {__html: `${newSection}`};
    };

    changeSection = (name, history) => {
        let newName = name === 'home'
            ? '/'
            : `/${name.toLowerCase()}`;
        history.push(newName);
    };

    render() {
        let currentIndex = this.props.location.pathname === '/'
            ? 0
            : this
                .props
                .sections
                .names
                .indexOf(this.props.location.pathname.replace('/', ''));

        return (
            <header>
                <nav className="app__header">
                    {this.props.isMobile && (
                        <nav className="app__header-button-container">
                            {this
                                .props
                                .sections
                                .names
                                .map((section, index) => <Link
                                    className="app__header-button-link"
                                    key={`button-section-${index}`}
                                    onClick={() => this.changeSection(this.props.sections.names[index], this.props.history)}
                                    to={this.props.sections.names[index] === 'home'
                                    ? '/'
                                    : `/${this
                                        .props
                                        .sections
                                        .names[index]
                                        .toLowerCase()}`}>
                                    <img
                                        className="app__header-button-image"
                                        alt={`${this.props.sections.names[index]} Button`}
                                        src={require(`../../images/header-${this.props.sections.names[index].toLowerCase()}-button.png`)}/>
                                </Link>)}
                        </nav>
                    )}
                    {!this.props.isMobile && (
                        <ul className="app__header-sections">
                            {this
                                .props
                                .sections
                                .names
                                .map((section, index) => <li
                                    key={`header-section-${index}`}
                                    className="app__header-section"
                                    onClick={() => this.changeSection(this.props.sections.names[index], this.props.history)}>
                                    <NavLink
                                        activeStyle={{
                                        backgroundColor: 'white',
                                        color: 'black'
                                    }}
                                        exact
                                        to={this.props.sections.names[index] === 'home'
                                        ? '/'
                                        : `/${this
                                            .props
                                            .sections
                                            .names[index]
                                            .toLowerCase()}`}>
                                        {section}
                                    </NavLink>
                                </li>)}
                        </ul>
                    )}
                </nav>
                <div className="app__header-banner">
                    <h1
                        className="app__header-title"
                        dangerouslySetInnerHTML={this
                        .props
                        .sections
                        .names
                        .indexOf(this.props.location.pathname.replace('/', '')) === -1
                        ? this.splitSectionTitle('projects')
                        : this.splitSectionTitle(this.props.sections.names[currentIndex])}/> {/* this.props.sections.names[currentIndex] */}
                </div>
            </header>
        );
    }
}

export default withRouter(Header);