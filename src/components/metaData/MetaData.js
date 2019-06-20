import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {Helmet} from "react-helmet";

class MetaData extends Component {

    camelCase = str => {
        return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
            if (+ match === 0) 
                return ''; //
            return index === 0
                ? match.toLowerCase()
                : match.toUpperCase();
        });
    };
    updateDescription = path => {
        if (path.indexOf('/projects/') !== -1) {
            return 'A particular pizzazy project Josh has pontificated over.';
        } else {
            switch (path) {
                case '/':
                    return "Joshua Kirwin's amazing online portfolio of mystical wonders.";
                case '/bio':
                    return "Everything you ever wanted to know about Joshua Kirwin - minus his favorite pie " +
                        "flavor.";
                case '/contact':
                    return "Get in touch with me, won't you?";
                case '/projects':
                    return "A plethora of pizzazy projects Josh has pontificated over.";
                default:
                    return "Joshua Kirwin's amazing online portfolio of mystical wonders.";
            }
        }
    }

    render() {
        const sectionTitle = this.props.location.pathname;
        let camelCaseTitle = this
            .camelCase(sectionTitle)
            .replace(/-/g, ' ')
            .replace('/', '')
            .replace('/', ' | ');
        //special case for AJC
        if (camelCaseTitle === 'Projects | Ajc') {
            camelCaseTitle = 'Projects | AJC';
        }
        return (
            <Helmet>
                <title>{`Joshua Kirwin | ${this.props.location.pathname === '/'
                        ? 'Home'
                        : camelCaseTitle}`}</title>
                <meta
                    name='description'
                    content={this.updateDescription(this.props.location.pathname)}/>
            </Helmet>
        );
    }
}

export default withRouter(MetaData);