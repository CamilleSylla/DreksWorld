import React from 'react';
import useFirestore from '../../Hooks/useFirestore'

//components
import Nav from './Nav/Nav';
import UploadForm from '../UploadForm';

//assets
import One from '../../assets/portfolio/arash-payam--qtnZj7zB2U-unsplash.jpg'

import '../Portfolio/Portfolio.css'


const Portfolio = () => {
    const { docs } = useFirestore('images');
    console.log(docs)
    return (
        <div className="pCont">
            <Nav />
            <UploadForm /><div className="img-grid">
            { docs && docs.map(doc => (
                    <div className="img-wrap" key={doc.id}>
                        <img src={doc.url} alt="uploaded pic" />
                </div>
            ))}
            </div>
        </div>
    )
}

export default Portfolio;