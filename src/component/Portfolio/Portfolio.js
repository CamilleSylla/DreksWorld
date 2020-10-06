import React, { useState } from 'react';


//components
import Nav from './Nav/Nav';
import UploadForm from '../UploadForm';

import '../Portfolio/Portfolio.css'
import Modal from '../Modal';
import ImageGrid from './ImageGrid';


const Portfolio = () => {
    
    const [selectedImg, setSelectedImg] = useState(null)
    return (
        <div className="pCont">
            <Nav />
            <UploadForm />
            <ImageGrid setSelectedImg={setSelectedImg}/>
            { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
        </div>
    )
}

export default Portfolio;