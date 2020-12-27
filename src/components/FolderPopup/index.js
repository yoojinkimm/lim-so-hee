import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './folder-pop.css';


import IconRed from '../../data/icons/btn_red.svg';
import IconYellow from '../../data/icons/btn_yellow.svg';
import IconGreen from '../../data/icons/btn_green.svg';

import { Button, Row, Col } from 'react-bootstrap';


const folder_contents = [
    {
        folderName : '자소서',
        contents: [
            {
                format : 'word',
                title : '자소서 초안',
            },
            {
                format : 'file',
                title : '자소서 최종 모음',
            },
        ]
    }
]



const FolderPopup = ({folderName, show, setShow}) => {
    const [nowFolder, setNowFolder] = useState(null);

    var max = 300;
    var min = 100;
    var num = Math.random() * (max - min) + min ;


    var z = 3;


    useEffect(() => {
        if(folderName !== undefined) setNowFolder(folderName)
    }, [])

    return(
    <>
    {show &&
        <div className='folder-popup'
        onClick={() => z = z+1}
        style={{top: 100 + num, left: 150 + num, zIndex: z}}>
            <div className="header-back">
                <div className="window-btn-container">
                    <img className="window-btn click" src={IconRed} onClick={() => setShow(false)} />
                    <img className="window-btn click" src={IconYellow} onClick={() => setShow(false)} />
                    <img className="window-btn click" src={IconGreen} />
                </div>
                <div className='folder-title-text'>{nowFolder}</div>
            </div>
            <Row style={{width: '100%', height: '100%'}}>
                <Col sm={3} md={3} lg={3} className="folder-menu">
                    <div className="folder-menu-top">ICloud</div>
                    <div className="folder-menu-text click"
                    onClick={() => setNowFolder('desktop')}
                    style={{backgroundColor: nowFolder === 'desktop' && 'rgba(200,200,200)'}}>Desktop</div>
                    <div className="folder-menu-text click"
                    onClick={() => setNowFolder('documents')}
                    style={{backgroundColor: nowFolder === 'documents' && 'rgba(200,200,200)'}}>Documents</div>
                </Col>
                <Col sm={9} md={9} lg={9} className="folder-contents">

                </Col>
            </Row>
        </div>
    }
    </>
    )
}

export default FolderPopup;