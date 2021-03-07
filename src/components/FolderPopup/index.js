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

import Thumb_Daejong from '../../data/images/대종기획_최종(썸네일).svg';
import Thumb_Zewoo from '../../data/images/제우기획_최종(썸네일).svg';
import Thumb_KCA from '../../data/images/KCA_최종(썸네일).svg';

import Thumb_Zewoo_word from '../../data/images/(주)제우마케팅인턴.svg';
import Thumb_알바_word from '../../data/images/아르바이트지원서.svg';
import Thumb_GS_word from '../../data/images/GSSHOP마케팅.svg';
import Thumb_Kyopo_word from '../../data/images/Kyopo콘텐츠에디터.svg';
import Thumb_TJ_word from '../../data/images/TJTelecom마케팅.svg';

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
                <div className="folder-icon click" onClick={() => history.push({pathname: '/word', state: { title : "(주)제우 마케팅 인턴"}})}>
                    <div className="img-container">
                        <img src={Thumb_Zewoo_word} style={{width: 43}} />
                    </div>
                    <div>(주)제우 마케팅 인턴.docx</div>
                </div>,
                <div className="folder-icon">
                    <div className="img-container">
                        <img src={Thumb_알바_word} style={{width: 43}} />
                    </div>
                    <div>아르바이트 지원서.docx</div>
                </div>,
                <div className="folder-icon">
                    <div className="img-container">
                        <img src={Thumb_GS_word} style={{width: 43}} />
                    </div>
                    <div>GS SHOP 마케팅.docx</div>
                </div>,
                <div className="folder-icon">
                    <div className="img-container">
                        <img src={Thumb_Kyopo_word} style={{width: 43}} />
                    </div>
                    <div>Kyopo 콘텐츠 에디터.docx</div>
                </div>,
                <div className="folder-icon">
                    <div className="img-container">
                        <img src={Thumb_TJ_word} style={{width: 43}} />
                    </div>
                    <div>TJ Telecom 마케팅.docx</div>
                </div>,
            ]
        },
        {
            index: 1,
            folderName : 'Desktop',
            contents: [
                <div className="folder-icon click" onClick={() => changeNowFolder('2020-2')}>
                    <div className="img-container">
                        <img src={FolderIcon} />
                    </div>
                    <div>2020-2</div>
                </div>,
                <div className="folder-icon click" onClick={() => changeNowFolder('취업준비')}>
                    <div className="img-container">
                        <img src={FolderIcon} />
                    </div>
                    <div>취업준비</div>
                </div>,
            ]
        },
        {
            index: 2,
            folderName : 'Documents',
            contents: [
                <div className="folder-icon click" onClick={() => changeNowFolder('대외활동')}>
                    <div className="img-container">
                        <img src={FolderIcon} />
                    </div>
                    <div>대외활동</div>
                </div>,
                <div className="folder-icon click" onClick={() => changeNowFolder('백업')}>
                    <div className="img-container">
                        <img src={FolderIcon} />
                    </div>
                    <div>백업</div>
                </div>,
            ]
        },
        {
            index: 3,
            folderName : '백업',
            contents: [
                <div className="folder-icon click" onClick={() => changeNowFolder('시나리오(초안)')}>
                    <div className="img-container">
                        <img src={FolderIcon} />
                    </div>
                    <div>시나리오(초안)</div>
                </div>,
                <div className="folder-icon click" onClick={() => changeNowFolder('사진')}>
                    <div className="img-container">
                        <img src={FolderIcon} />
                    </div>
                    <div>사진</div>
                </div>,
            ]
        },
        {
            index: 4,
            folderName : '2020-2',
            contents: [
                <div className="folder-icon click" onClick={() => history.push({pathname: '/ppt', state: { title : "웹디 과제"}})}>
                    <div className="img-container">
                        <img src={IconPpt} />
                    </div>
                    <div>웹디 과제.ai</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push({pathname: '/ppt', state: { title : "인창 과제"}})}>
                    <div className="img-container">
                        <img src={IconPpt} />
                    </div>
                    <div>인창 과제.pptx</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push('/maya')}>
                    <div className="img-container">
                        <img src={IconMaya} />
                    </div>
                    <div>모델링 과제.ma</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push({pathname: '/ppt', state: { title : "종세문 과제"}})}>
                    <div className="img-container">
                        <img src={IconPpt} />
                    </div>
                    <div>종세문 과제.pptx</div>
                </div>,
            ]
        },
        {
            index: 5,
            folderName : '대외활동',
            contents: [
                <div className="folder-icon click" onClick={() => history.push({pathname: '/word', state: { title : "영화 학회 지원서"}})}>
                    <div className="img-container">
                        <img src={IconWord} />
                    </div>
                    <div>영화 학회 지원서.docx</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push({pathname: '/ppt', state: { title : "공모전 최종"}})}>
                    <div className="img-container">
                        <img src={IconPpt} />
                    </div>
                    <div>공모전 최종.pptx</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push({pathname: '/ppt', state: { title : "아이디어 공모전 최종"}})}>
                    <div className="img-container">
                        <img src={IconPpt} />
                    </div>
                    <div>아이디어 공모전 최종.pptx</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push({pathname: '/ppt', state: { title : "마케팅 대외활동"}})}>
                    <div className="img-container">
                        <img src={IconPpt} />
                    </div>
                    <div>마케팅 대외활동.pptx</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push('/premiere')}>
                    <div className="img-container">
                        <img src={IconPremiere} />
                    </div>
                    <div>동아리 다큐멘터리.mov</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push('/illust')}>
                    <div className="img-container">
                        <img src={IconIllust} />
                    </div>
                    <div>2019비주얼가이드.ai</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push({pathname: '/ppt', state: { title : "부귀영화 발제"}})}>
                    <div className="img-container">
                        <img src={IconPpt} />
                    </div>
                    <div>부귀영화 발제.pptx</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push({pathname: '/photo', state: { title : "대종기획_최종"}})}>
                    <div className="img-container">
                        <img src={Thumb_Daejong} style={{width: 43}} />
                    </div>
                    <div>대종기획_최종.pdf</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push({pathname: '/photo', state: { title : "제우기획_최종"}})}>
                    <div className="img-container">
                        <img src={Thumb_Zewoo} style={{width: 43}} />
                    </div>
                    <div>제우기획_최종.pdf</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push({pathname: '/photo', state: { title : "KCA_최종"}})}>
                    <div className="img-container">
                        <img src={Thumb_KCA} style={{width: 43}} />
                    </div>
                    <div>KCA_최종.pdf</div>
                </div>,
            ]
        },
        {
            index: 6,
            folderName : '시나리오(초안)',
            contents: [
                <div className="folder-icon click" onClick={() => history.push({pathname: '/word', state: { title : "시나리오1"}})}>
                    <div className="img-container">
                        <img src={IconWord} />
                    </div>
                    <div>시나리오1.docx</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push({pathname: '/word', state: { title : "시나리오2"}})}>
                    <div className="img-container">
                        <img src={IconWord} />
                    </div>
                    <div>시나리오2.docx</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push({pathname: '/word', state: { title : "아이디어"}})}>
                    <div className="img-container">
                        <img src={IconWord} />
                    </div>
                    <div>아이디어.docx</div>
                </div>,
            ]
        },
        {
            index: 7,
            folderName : '사진',
            contents: [
                <div className="folder-icon click" onClick={() => history.push({pathname: '/photo', state: { title : "할머니 집 사진1"}})}>
                    <div className="img-container">
                        <img src={IconPhoto} />
                    </div>
                    <div>할머니 집 사진1.jpeg</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push({pathname: '/photo', state: { title : "할머니 집 사진2"}})}>
                    <div className="img-container">
                        <img src={IconPhoto} />
                    </div>
                    <div>할머니 집 사진2.jpeg</div>
                </div>,
                <div className="folder-icon click" onClick={() => history.push({pathname: '/photo', state: { title : "초등학교 사진"}})}>
                    <div className="img-container">
                        <img src={IconPhoto} />
                    </div>
                    <div>초등학교 사진.jpeg</div>
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