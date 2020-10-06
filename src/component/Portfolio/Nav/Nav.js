import React from 'react';

import '../Nav/Nav.css'

// Rooter
import { Link } from 'react-router-dom';


class Nav extends React.Component {

    render() {

        return (
            <div className="pNav">
                <Link to='/'
                    className="home"
                    style={{ textDecoration: 'none', color: 'white' }}
                >
                    <p >
                        Home
                </p>
                </Link>
                <Link to='/Portfolio'
                    className="portfolio"
                    style={{ textDecoration: 'none', color: 'white' }}
                >
                    <p >
                        Portfolio
                    </p>
                </Link>

                <Link to='/Apropos'
                    className="propos"
                    style={{ textDecoration: 'none', color: 'white' }}
                >
                    <p >
                        A Propos
                    </p>
                </Link>
                <Link to='/Contact'
                    className="contact"
                    style={{ textDecoration: 'none', color: 'white' }}
                >
                    <p >
                        Contact
                </p>
                </Link>
            </div>
        )
    }
}

export default Nav;