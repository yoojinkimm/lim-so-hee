import React, { useEffect, useState, useContext } from 'react';
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
import IconPpt from '../../data/icons/ppt_icon.png';
import IconExcel from '../../data/icons/excel.png';
import IconPhoto from '../../data/icons/image_icon.png';

import PasswordInput from '../PasswordInput';

import { UserContext } from '../../providers/UserProvider';


const backupPW = "7890" // 원래 학번 20170987
const backupPWHint = '학번 뒤 네자리 reverse'


const FolderPopup = ({folderName, show, setShow}) => {
    const history = useHistory();
    const [num, setNum] = useState(0);

    const [nowFolder, setNowFolder] = useState([]);
    const [update, setUpdate] = useState(false);

    const [backupPWInput, setBackupPWInput] = useState("")

    // const { finder, nowFolder, setNowFolder, update, setUpdate } = useContext(UserContext);
    const { finder } = useContext(UserContext);

    const folder_contents = [
        {   
            index: 0,
            folderName : '취업준비',
            contents: [
                <div className="folder-icon click" onClick={() => history.push({pathname: '/word', state: { title : "자기소개서"}})}>
                    <img src={IconWord} />
                    <div>자기소개서</div>
                </div>,
            ]
        },
        {
            index: 1,
            folderName : 'Desktop',
            contents: [
                <div className="folder-icon click" onClick={() => changeNowFolder('2020-2')}>
                    <img src={FolderIcon} />
                    <div>2020-2</div>
                </div>,
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
                <div className="folder-icon click" onClick={() => changeNowFolder('대외활동')}>
                    <img src={FolderIcon} />
                    <div>대외활동</div>
                </div>,
                <div className="folder-icon click" onClick={() => changeNowFolder('백업')}>
                    <img src={FolderIcon} />
                    <div>백업</div>
                </div>,
            ]
        },
        {
            index: 3,
            folderName : '백업',
            contents: [
                <div className="folder-icon click" onClick={() => changeNowFolder('시나리오(초안)')}>
                    <img src={FolderIcon} />
                    <div>시나리오(초안)</div>
                </div>,
                <div className="folder-icon click" onClick={() => changeNowFolder('사진')}>
                    <img src={FolderIcon} />
                    <div>사진</div>
                </div>,
            ]
        },
        {
            index: 4,
            folderName : '2020-2',
            contents: [
                <div className="folder-icon click" onClick={() => history.push({pathname: '/ppt', state: { title : "웹디 과제"}})}>
                    <img src={IconPpt} />
                    <div>웹디 과제</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push({pathname: '/ppt', state: { title : "인창 과제"}})}>
                    <img src={IconPpt} />
                    <div>인창 과제</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push('/maya')}>
                    <img src={IconMaya} />
                    <div>모델링 과제</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push({pathname: '/ppt', state: { title : "종세문 과제"}})}>
                    <img src={IconPpt} />
                    <div>종세문 과제</div>
                </div>,
            ]
        },
        {
            index: 5,
            folderName : '대외활동',
            contents: [
                <div className="folder-icon click" onClick={() => history.push({pathname: '/word', state: { title : "영화 학회 지원서"}})}>
                    <img src={IconWord} />
                    <div>영화 학회 지원서</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push({pathname: '/ppt', state: { title : "공모전 최종"}})}>
                    <img src={IconPpt} />
                    <div>공모전 최종</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push({pathname: '/ppt', state: { title : "아이디어 공모전 최종"}})}>
                    <img src={IconPpt} />
                    <div>아이디어 공모전 최종</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push({pathname: '/ppt', state: { title : "마케팅 대외활동"}})}>
                    <img src={IconPpt} />
                    <div>마케팅 대외활동</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push('/premiere')}>
                    <img src={IconPremiere} />
                    <div>동아리 다큐멘터리</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push('/illust')}>
                    <img src={IconIllust} />
                    <div>2019비주얼가이드</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push({pathname: '/ppt', state: { title : "부귀영화 발제"}})}>
                    <img src={IconPpt} />
                    <div>부귀영화 발제</div>
                </div>,
            ]
        },
        {
            index: 6,
            folderName : '시나리오(초안)',
            contents: [
                <div className="folder-icon click" onClick={() => history.push({pathname: '/word', state: { title : "시나리오1"}})}>
                    <img src={IconWord} />
                    <div>시나리오1</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push({pathname: '/word', state: { title : "시나리오2"}})}>
                    <img src={IconWord} />
                    <div>시나리오2</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push({pathname: '/word', state: { title : "아이디어"}})}>
                    <img src={IconWord} />
                    <div>아이디어</div>
                </div>,
            ]
        },
        {
            index: 7,
            folderName : '사진',
            contents: [
                <div className="folder-icon click" onClick={() => history.push({pathname: '/photo', state: { title : "할머니 집 사진1"}})}>
                    <img src={IconPhoto} />
                    <div>할머니 집 사진1</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push({pathname: '/photo', state: { title : "할머니 집 사진2"}})}>
                    <img src={IconPhoto} />
                    <div>할머니 집 사진2</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push({pathname: '/photo', state: { title : "초등학교 사진"}})}>
                    <img src={IconPhoto} />
                    <div>초등학교 사진</div>
                </div>,
            ]
        },
    ]

    useEffect(() => {
        var max = 300;
        var min = 100;
        var random = Math.random() * (max - min) + min ;
        setNum(random);
    }, [])


    var z = 3;


    const changeNowFolder = (name) => {
            var list = [];
            list = nowFolder;
            list.push(name);
            setNowFolder(list);
            setUpdate(!update);
            console.log(list);
    }

    const goBackFolder = () => {
            var list = [];
            list = nowFolder.slice(0, nowFolder.length - 1);
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
                 <div style={{width: '100%', paddingLeft: 70, display: 'flex', flexDirection: 'row'}}>
                    <div className="change-view-btn click" onClick={() => {goBackFolder()}}>◁</div>
                     <div className='folder-title-text' style={{paddingLeft: '40%'}}>{nowFolder[nowFolder.length - 1]}</div>
                </div>
               
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
                            { backupPWInput !== backupPW
                            ?
                            <PasswordInput value={backupPWInput} 
                            onChange={(e) => setBackupPWInput(e.target.value)}
                            answer={backupPW} hint={backupPWHint} />
                            :
                            <>
                                {folder_contents[3].contents.map((item) => {
                                    return(
                                        <Col sm={6} md={6} lg={4} xl={3}>{item}</Col>
                                    )
                                })}
                            </>
                            }
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
                        {nowFolder[nowFolder.length - 1] === '대외활동' &&
                        <>
                            {folder_contents[5].contents.map((item) => {
                                return(
                                    <Col sm={6} md={6} lg={4} xl={3}>{item}</Col>
                                )
                            })}
                        </>
                        }
                        {nowFolder[nowFolder.length - 1] === '시나리오(초안)' &&
                        <>
                            {folder_contents[6].contents.map((item) => {
                                return(
                                    <Col sm={6} md={6} lg={4} xl={3}>{item}</Col>
                                )
                            })}
                        </>
                        }
                        {nowFolder[nowFolder.length - 1] === '사진' &&
                        <>
                            {folder_contents[7].contents.map((item) => {
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