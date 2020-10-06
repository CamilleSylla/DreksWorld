import React from 'react';

//components
import Nav from './Nav/Nav'

//assets
import One from '../../assets/portfolio/arash-payam--qtnZj7zB2U-unsplash.jpg'

import '../Portfolio/Portfolio.css'

class Portfolio extends React.Component {

    render() {

        return (
            <div className="pCont">
                <Nav/>
                <div className="pGrid">
                    <div className="menu">
                        <p>Urbain</p>
                        <p>Sport</p>
                        <p>Portrait</p>
                        <p>Nature</p>
                    </div>
                    <div className="One">
                    </div>
                    <div className="Two">
                    </div>
                    <div className="Three">
                    </div>
                    <div className="Four">
                        
                    </div>
                    <div className="Five">
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;