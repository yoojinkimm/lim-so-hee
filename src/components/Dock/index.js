import React, { useState, useContext, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import './dock.css';

import IconFinder from '../../data/icons/finder.png';
import IconLaunchpad from '../../data/icons/launchpad-icon.png';
import IconSapari from '../../data/icons/safari-icon.png';
import IconKakao from '../../data/icons/kakaotalk.svg';
import IconCalendar from '../../data/icons/calendar.png';
import IconMemo from '../../data/icons/note.png';
import IconSetting from '../../data/icons/setting.png';
import IconPhotoshop from '../../data/icons/Photoshop.svg';
import IconIllust from '../../data/icons/Illustrator.svg';
import IconPremiere from '../../data/icons/Premiere.svg';
import IconAE from '../../data/icons/After Effects.svg';
import IconMaya from '../../data/icons/maya.png';
import IconWord from '../../data/icons/word.png';
import IconPpt from '../../data/icons/ppt_icon.png';
import IconExcel from '../../data/icons/excel.png';
import IconPhoto from '../../data/icons/image_icon.png';

import IconDot from '../../data/icons/dot.svg';

import FolderPopup from '../FolderPopup';
import { UserContext } from '../../providers/UserProvider';

const Dock = () => {
    const history = useHistory();
    const location = useLocation();

    const { finder, setFinder } = useContext(UserContext);

     const path = location.pathname;

     // useEffect(() => console.log(path))

    return(
        <>
        { path !== '/intro' && path !== '/start' && path !== '/'
        &&
        <div className="desktop-bottom-floating">
            <div className="desktop-dock">
                <div className="dock-col" onClick={() => setFinder(true)}>
                    <img className="dock-icon click" src={IconFinder} />
                    <div style={{height: 5}}>
                        {finder &&
                        <img className="dot" src={IconDot} />
                        }
                    </div>
                </div>
                <div className="dock-col">
                    <img className="dock-icon" src={IconLaunchpad} />
                    <div style={{height: 5}}>
                        {path === '/launchpad' &&
                        <img className="dot" src={IconDot} />
                        }
                    </div>
                </div>
                <div className="dock-col" onClick={() => history.push('/sapari')}>
                    <img className="dock-icon click" src={IconSapari} />
                    <div style={{height: 5}}>
                        {path === '/sapari' &&
                        <img className="dot" src={IconDot} />
                        }
                    </div>
                </div>
                <div className="dock-col" onClick={() => history.push('/kakao')}>
                    <img className="dock-icon click" src={IconKakao} />
                    <div style={{height: 5}}>
                        {path === '/kakao' &&
                        <img className="dot" src={IconDot} />
                        }
                    </div>
                </div>
                <div className="dock-col" onClick={() => history.push('/calendar')}>
                    <img className="dock-icon click" src={IconCalendar} />
                    <div style={{height: 5}}>
                        {path === '/calendar' &&
                        <img className="dot" src={IconDot} />
                        }
                    </div>
                </div>
                <div className="dock-col" onClick={() => history.push('/memo')}>
                    <img className="dock-icon click" src={IconMemo} />
                    <div style={{height: 5}}>
                        {path === '/memo' &&
                        <img className="dot" src={IconDot} />
                        }
                    </div>
                </div>
                <div className="dock-col">
                    <img className="dock-icon" src={IconSetting} />
                    <div style={{height: 5}}>
                        {path === '/setting' &&
                        <img className="dot" src={IconDot} />
                        }
                    </div>
                </div>
                <div className="dock-col">
                    <img className="dock-icon" src={IconPhotoshop} />
                    <div style={{height: 5}}>
                        {path === '/photoshop' &&
                        <img className="dot" src={IconDot} />
                        }
                    </div>
                </div>
                <div className="dock-col" onClick={() => history.push('/illust')}>
                    <img className="dock-icon click" src={IconIllust} />
                    <div style={{height: 5}}>
                        {path === '/illust' &&
                        <img className="dot" src={IconDot} />
                        }
                    </div>
                </div>
                <div className="dock-col" onClick={() => history.push('/premiere')}>
                    <img className="dock-icon click" src={IconPremiere} />
                    <div style={{height: 5}}>
                        {path === '/premiere' &&
                        <img className="dot" src={IconDot} />
                        }
                    </div>
                </div>
                <div className="dock-col">
                    <img className="dock-icon" src={IconAE} />
                    <div style={{height: 5}}>
                        {path === '/ae' &&
                        <img className="dot" src={IconDot} />
                        }
                    </div>
                </div>
                <div className="dock-col" onClick={() => history.push('/maya')}>
                    <img className="dock-icon click" src={IconMaya} />
                    <div style={{height: 5}}>
                        {path === '/maya' &&
                        <img className="dot" src={IconDot} />
                        }
                    </div>
                </div>
                <div className="dock-col" onClick={() => history.push('/word')}>
                    <img className="dock-icon click" src={IconWord} />
                    <div style={{height: 5}}>
                        {path === '/word' &&
                        <img className="dot" src={IconDot} />
                        }
                    </div>
                </div>
                <div className="dock-col" onClick={() => history.push('/ppt')}>
                    <img className="dock-icon click" src={IconPpt} />
                    <div style={{height: 5}}>
                        {path === '/ppt' &&
                        <img className="dot" src={IconDot} />
                        }
                    </div>
                </div>
                <div className="dock-col">
                    <img className="dock-icon" src={IconExcel} />
                    <div style={{height: 5}}>
                        {path === '/excel' &&
                        <img className="dot" src={IconDot} />
                        }     
                    </div>
                </div>
                <div className="dock-col" onClick={() => history.push('/photo')}>
                    <img className="dock-icon" src={IconPhoto} />
                    <div style={{height: 5}}>
                        {path === '/photo' &&
                        <img className="dot" src={IconDot} />
                        }     
                    </div>
                </div>
            </div>

            <FolderPopup show={finder} setShow={setFinder} folderName={'documents'} />
        </div>
        }
        </>
    )
}

export default Dock;