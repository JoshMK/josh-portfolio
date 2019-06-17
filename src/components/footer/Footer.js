import React, {Component} from 'react';
import './Footer.scss';

class Footer extends Component {

    render() {
        const year = new Date();
        return (
            <footer className='app__footer'>
                <span className='app__footer-text'>&copy; {year.getFullYear()}
                    - Joshua Kirwin</span>
            </footer>
        );
    }
}

export default Footer;