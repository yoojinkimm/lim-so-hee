import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './folder.css';

import FolderIcon from '../../data/icons/folder.png';
import FolderPopup from '../FolderPopup';


const Folder = ({name}) => {
    const [showPopup, setShowPopup] = useState(false)

    return(
        <>
        <div className='desktop-folder click' onClick={() => {setShowPopup(true)}}>
            <img className='folder-img' src={FolderIcon} />
            <div className='folder-txt'>{name}</div>
        </div>
        <FolderPopup show={showPopup} setShow={setShowPopup} folderName={name} />
        </>
    )
}

export default Folder;