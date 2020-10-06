import React from 'react';
import Nav from './Nav/Nav'

//assets
import IG from "../../assets/icons/instagram.svg"
import FB from "../../assets/icons/facebook.svg"
import Pint from "../../assets/icons/pinterest.svg"

//style
import './Home.css'


class Home extends React.Component {

    render() {

        return (
            <div className="container">
                <div className="layer">
                <h3 className="name">Cédrik Loustaunau</h3>
                <h1 className="pseudo">DreksWorld</h1>
                <h2 className="job">Photographe</h2>
                <div className="navHome">
                    <Nav />
                </div>
                <div className="icons">
                    <img src={IG} className="iconSize"/>
                    <img src={FB} className="iconSize"/>
                    <img src={Pint} className="iconSize"/>
                </div>
                </div>
            </div>
        )
    }
}

export default Home;