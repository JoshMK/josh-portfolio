import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {Helmet} from "react-helmet";

class MetaData extends Component {

    camelCase = (str) => {
        return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
            if (+ match === 0) 
                return ''; //
            return index === 0
                ? match.toLowerCase()
                : match.toUpperCase();
        });
    }

    render() {
        const sectionTitle = this.props.location.pathname;
        let camelCaseTitle = this
            .camelCase(sectionTitle)
            .replace(/-/g, ' ')
            .replace('/', '')
            .replace('/', ' | ');
            //special case for AJC
        if (camelCaseTitle === 'Projects | Ajc'){
            camelCaseTitle = 'Projects | AJC';
        }
        return (
            <Helmet>
                <title>{`Joshua Kirwin | ${this.props.location.pathname === '/'
                        ? 'Home'
                        : camelCaseTitle}`}</title>
                <meta
                    name='description'
                    content="Joshua Kirwin's amazing online portfolio of mystical wonders"/>
            </Helmet>
        );
    }
}

export default withRouter(MetaData);