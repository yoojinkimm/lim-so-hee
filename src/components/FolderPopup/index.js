import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './folder-pop.css';


import IconRed from '../../data/icons/btn_red.svg';
import IconYellow from '../../data/icons/btn_yellow.svg';
import IconGreen from '../../data/icons/btn_green.svg';

import { Button, Row, Col } from 'react-bootstrap';

import FolderIcon from '../../data/icons/folder.png';

import IconPhotoshop from '../../data/icons/Photoshop.svg';
import IconIllust from '../../data/icons/Illustrator.svg';
import IconPremiere from '../../data/icons/Premiere.svg';
import IconAE from '../../data/icons/After Effects.svg';
import IconMaya from '../../data/icons/maya.png';
import IconWord from '../../data/icons/word.png';
import IconExcel from '../../data/icons/excel.png';






const FolderPopup = ({folderName, show, setShow}) => {
    const [nowFolder, setNowFolder] = useState([]);
    const history = useHistory()
    const [update, setUpdate] = useState(false);


    const folder_contents = [
        {   
            index: 0,
            folderName : '취업준비',
            contents: [
                <div className="folder-icon click" onClick={() => history.push('/word')}>
                    <img src={IconWord} />
                    <div>자소서</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push('/ppt')}>
                    <img src={IconWord} />
                    <div>포트폴리오</div>
                </div>,
            ]
        },
        {
            index: 1,
            folderName : 'Desktop',
            contents: [
                <div className="folder-icon click" onClick={() => changeNowFolder('취업준비')}>
                    <img src={FolderIcon} />
                    <div>취업준비</div>
                </div>,
            ]
        },
        {
            index: 2,
            folderName : 'Documents',
            contents: [
                <div className="folder-icon click" onClick={() => changeNowFolder('2020-2')}>
                    <img src={FolderIcon} />
                    <div>2020-2</div>
                </div>,
                <div className="folder-icon click" onClick={() => changeNowFolder('대외활동')}>
                    <img src={FolderIcon} />
                    <div>대외활동</div>
                </div>,
                <div className="folder-icon click" onClick={() => changeNowFolder('대외활동')}>
                    <img src={FolderIcon} />
                    <div>백업</div>
                </div>,
            ]
        },
        {
            index: 3,
            folderName : '백업',
            contents: [
                <div className="folder-icon click" onClick={() => history.push('/word')}>
                    <img src={IconWord} />
                    <div>시나리오</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push('/word')}>
                    <img src={IconWord} />
                    <div>아이디어</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push('/photo')}>
                    <img src={IconPhotoshop} />
                    <div>할머니 집 사진</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push('/photo')}>
                    <img src={IconPhotoshop} />
                    <div>초등학교 사진</div>
                </div>,
            ]
        },
        {
            index: 4,
            folderName : '2020-2',
            contents: [
                <div className="folder-icon click" onClick={() => history.push('/illust')}>
                    <img src={IconIllust} />
                    <div>웹디 과제</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push('/premiere')}>
                    <img src={IconPremiere} />
                    <div>인창 과제</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push('/maya')}>
                    <img src={IconMaya} />
                    <div>모델링 과제</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push('/word')}>
                    <img src={IconWord} />
                    <div>미디어와 인간 수업자료</div>
                </div>,
            ]
        },
        {
            index: 5,
            folderName : '대외활동',
            contents: [
                <div className="folder-icon click" onClick={() => history.push('/word')}>
                    <img src={IconWord} />
                    <div>영화 소모임 자료</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push('/ppt')}>
                    <img src={IconWord} />
                    <div>공모전 자료</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push('/ppt')}>
                    <img src={IconWord} />
                    <div>대외활동 자료</div>
                </div>,
            ]
        },
    ]

    var max = 300;
    var min = 100;
    var num = Math.random() * (max - min) + min ;


    var z = 3;


    const changeNowFolder = (name) => {
        var list = [];
        list = nowFolder;
        list.push(name);
        setNowFolder(list);
        setUpdate(!update);
    }


    useEffect(() => {
        if(folderName !== undefined) {
            changeNowFolder(folderName)
        }
    }, [folderName])

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
                <div className='folder-title-text'>{nowFolder[nowFolder.length - 1]}</div>
            </div>
            <Row style={{width: '100%', height: '100%'}}>
                <Col sm={3} md={3} lg={3} className="folder-menu">
                    <div className="folder-menu-top">ICloud</div>
                    <div className="folder-menu-text click"
                    onClick={() => changeNowFolder('desktop')}
                    style={{backgroundColor: nowFolder[nowFolder.length - 1] === 'desktop' && 'rgba(200,200,200)'}}>Desktop</div>
                    <div className="folder-menu-text click"
                    onClick={() => changeNowFolder('documents')}
                    style={{backgroundColor: nowFolder[nowFolder.length - 1] === 'documents' && 'rgba(200,200,200)'}}>Documents</div>
                </Col>
                <Col sm={9} md={9} lg={9}>
                    <Row className="folder-contents">
                        {nowFolder[nowFolder.length - 1] === 'desktop' &&
                        <>
                            {folder_contents[1].contents.map((item) => {
                                return(
                                    <Col sm={6} md={6} lg={4} xl={3}>{item}</Col>
                                )
                            })}
                        </>
                        }
                        {nowFolder[nowFolder.length - 1] === '취업준비' &&
                        <>
                            {folder_contents[0].contents.map((item) => {
                                return(
                                    <Col sm={6} md={6} lg={4} xl={3}>{item}</Col>
                                )
                            })}
                        </>
                        }
                        {nowFolder[nowFolder.length - 1] === 'documents' &&
                        <>
                            {folder_contents[2].contents.map((item) => {
                                return(
                                    <Col sm={6} md={6} lg={4} xl={3}>{item}</Col>
                                )
                            })}
                        </>
                        }
                        {nowFolder[nowFolder.length - 1] === '백업' &&
                        <>
                            {folder_contents[3].contents.map((item) => {
                                return(
                                    <Col sm={6} md={6} lg={4} xl={3}>{item}</Col>
                                )
                            })}
                        </>
                        }
                        {nowFolder[nowFolder.length - 1] === '2020-2' &&
                        <>
                            {folder_contents[4].contents.map((item) => {
                                return(
                                    <Col sm={6} md={6} lg={4} xl={3}>{item}</Col>
                                )
                            })}
                        </>
                        }
                        {nowFolder[nowFolder.length - 1] === '백업' &&
                        <>
                            {folder_contents[3].contents.map((item) => {
                                return(
                                    <Col sm={6} md={6} lg={4} xl={3}>{item}</Col>
                                )
                            })}
                        </>
                        }
                        {nowFolder[nowFolder.length - 1] === '대외활동' &&
                        <>
                            {folder_contents[5].contents.map((item) => {
                                return(
                                    <Col sm={6} md={6} lg={4} xl={3}>{item}</Col>
                                )
                            })}
                        </>
                        }
                    </Row>
                </Col>
            </Row>
        </div>
    }
    </>
    )
}

export default FolderPopup;