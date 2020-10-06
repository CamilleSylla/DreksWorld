import React from 'react';

import './Nav.css'

// Rooter
import { Link } from 'react-router-dom';


class Nav extends React.Component {

    render() {

        return (
            <div className="nav">
                <Link to='/Portfolio'
                    style={{ textDecoration: 'none', color: 'white' }}
                >
                    <p className="portfolio">
                        Portfolio
                    </p>
                </Link>

                <Link to='/Apropos'
                    style={{ textDecoration: 'none', color: 'white' }}
                >
                    <p className="propos">
                        A Propos
                    </p>
                </Link>
                <Link to='/Contact'
                 style={{ textDecoration: 'none', color: 'white' }}
                >
                <p className="contact">
                    Contact
                </p>
                </Link>
            </div>
        )
    }
}

export default Nav;