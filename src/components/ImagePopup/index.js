import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './image-pop.css';



const ImagePopup = ({imageName}) => {

    return(
        <div className='image-popup'>
            <div>{imageName}</div>
        </div>
    )
}

export default ImagePopup;