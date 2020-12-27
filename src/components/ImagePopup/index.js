import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './image-pop.css';


import IconRed from '../../data/icons/btn_red.svg';
import IconYellow from '../../data/icons/btn_yellow.svg';
import IconGreen from '../../data/icons/btn_green.svg';

import { Button, Row, Col } from 'react-bootstrap';


const image_contents = [
    {
        imageName : '할머니집',
        url: ''
    }
]



const ImagePopup = ({imageName, show, setShow}) => {
    const [nowImage, setNowImage] = useState(null);

    var max = 300;
    var min = 100;
    var num = Math.random() * (max - min) + min ;


    var z = 3;


    useEffect(() => {
        if(imageName !== undefined) setNowImage(imageName)
    }, [])

    return(
    <>
    {show &&
        <div className='image-popup'
        onClick={() => z = z+1}
        style={{top: 100 + num, left: 150 + num, zIndex: z}}>
            <div className="header-back">
                <div className="window-btn-container">
                    <img className="window-btn click" src={IconRed} onClick={() => setShow(false)} />
                    <img className="window-btn click" src={IconYellow} onClick={() => setShow(false)} />
                    <img className="window-btn click" src={IconGreen} />
                </div>
                <div className='image-title-text'>{nowImage}</div>
            </div>
            <div className="image-back">
                
            </div>
        </div>
    }
    </>
    )
}

export default ImagePopup;