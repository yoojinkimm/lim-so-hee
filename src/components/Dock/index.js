import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

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
import IconExcel from '../../data/icons/excel.png';

import IconDot from '../../data/icons/dot.svg';



const Dock = ({now}) => {
    const history = useHistory();

    return(
        <div className="desktop-bottom-floating">
            <div className="desktop-dock">
                <div className="dock-col">
                    <img className="dock-icon click" src={IconFinder} />
                    <div style={{height: 5}}>
                        {now === 'finder' &&
                        <img className="dot" src={IconDot} />
                        }
                    </div>
                </div>
                <div className="dock-col">
                    <img className="dock-icon" src={IconLaunchpad} />
                    <div style={{height: 5}}>
                        {now === 'launchpad' &&
                        <img className="dot" src={IconDot} />
                        }
                    </div>
                </div>
                <div className="dock-col" onClick={() => history.push('/sapari')}>
                    <img className="dock-icon click" src={IconSapari} />
                    <div style={{height: 5}}>
                        {now === 'sapari' &&
                        <img className="dot" src={IconDot} />
                        }
                    </div>
                </div>
                <div className="dock-col">
                    <img className="dock-icon click" src={IconKakao} />
                    <div style={{height: 5}}>
                        {now === 'kakao' &&
                        <img className="dot" src={IconDot} />
                        }
                    </div>
                </div>
                <div className="dock-col">
                    <img className="dock-icon click" src={IconCalendar} />
                    <div style={{height: 5}}>
                        {now === 'calendar' &&
                        <img className="dot" src={IconDot} />
                        }
                    </div>
                </div>
                <div className="dock-col" onClick={() => history.push('/memo')}>
                    <img className="dock-icon click" src={IconMemo} />
                    <div style={{height: 5}}>
                        {now === 'memo' &&
                        <img className="dot" src={IconDot} />
                        }
                    </div>
                </div>
                <div className="dock-col">
                    <img className="dock-icon" src={IconSetting} />
                    <div style={{height: 5}}>
                        {now === 'setting' &&
                        <img className="dot" src={IconDot} />
                        }
                    </div>
                </div>
                <div className="dock-col">
                    <img className="dock-icon click" src={IconPhotoshop} />
                    <div style={{height: 5}}>
                        {now === 'photoshop' &&
                        <img className="dot" src={IconDot} />
                        }
                    </div>
                </div>
                <div className="dock-col">
                    <img className="dock-icon click" src={IconIllust} />
                    <div style={{height: 5}}>
                        {now === 'illust' &&
                        <img className="dot" src={IconDot} />
                        }
                    </div>
                </div>
                <div className="dock-col">
                    <img className="dock-icon click" src={IconPremiere} />
                    <div style={{height: 5}}>
                        {now === 'premiere' &&
                        <img className="dot" src={IconDot} />
                        }
                    </div>
                </div>
                <div className="dock-col">
                    <img className="dock-icon click" src={IconAE} />
                    <div style={{height: 5}}>
                        {now === 'ae' &&
                        <img className="dot" src={IconDot} />
                        }
                    </div>
                </div>
                <div className="dock-col">
                    <img className="dock-icon click" src={IconMaya} />
                    <div style={{height: 5}}>
                        {now === 'maya' &&
                        <img className="dot" src={IconDot} />
                        }
                    </div>
                </div>
                <div className="dock-col" onClick={() => history.push('/word')}>
                    <img className="dock-icon click" src={IconWord} />
                    <div style={{height: 5}}>
                        {now === 'word' &&
                        <img className="dot" src={IconDot} />
                        }
                    </div>
                </div>
                <div className="dock-col">
                    <img className="dock-icon click" src={IconExcel} />
                    <div style={{height: 5}}>
                        {now === 'excel' &&
                        <img className="dot" src={IconDot} />
                        }     
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dock;