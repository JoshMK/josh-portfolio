import React, {Component} from 'react';
import {NavLink, Link} from "react-router-dom";
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
    render() {

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
                                    onClick={() => this.props.changeSection(index)}
                                    to={this.props.sections.names[index] === 'Home'
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
                                    onClick={() => this.props.changeSection(index)}>
                                    <NavLink
                                        activeStyle={{
                                        backgroundColor: 'white',
                                        color: 'black'
                                    }}
                                        exact
                                        to={this.props.sections.names[index] === 'Home'
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
                        dangerouslySetInnerHTML={this.splitSectionTitle(this.props.currentSection)}/>
                </div>
            </header>
        );
    }
}

export default Header;