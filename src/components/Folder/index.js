import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './folder.css';

import FolderIcon from '../../data/icons/folder.png';


const Folder = ({name}) => {

    return(
        <div className='desktop-folder click'>
            <img className='folder-img' src={FolderIcon} />
            <div className='folder-txt'>{name}</div>
        </div>
    )
}

export default Folder;