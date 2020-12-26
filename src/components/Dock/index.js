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
import IconWord from '../../data/icons/maya.png';
import IconExcel from '../../data/icons/excel.png';

import IconDot from '../../data/icons/dot.svg';



const Dock = () => {

    return(
        <div className="desktop-bottom-floating">
            <div className="desktop-dock">
                <div className="dock-col">
                    <img className="dock-icon" src={IconFinder} />
                    <div style={{height: 5}}>
                        <img className="dot" src={IconDot} />
                    </div>
                </div>
                <div className="dock-col">
                    <img className="dock-icon" src={IconLaunchpad} />
                    <div style={{height: 5}}>
                        <img className="dot" src={IconDot} />
                    </div>
                </div>
                <div className="dock-col">
                    <img className="dock-icon" src={IconSapari} />
                    <div style={{height: 5}}>
                        <img className="dot" src={IconDot} />
                    </div>
                </div>
                <div className="dock-col">
                    <img className="dock-icon" src={IconKakao} />
                    <div style={{height: 5}}>
                        <img className="dot" src={IconDot} />
                    </div>
                </div>
                <div className="dock-col">
                    <img className="dock-icon" src={IconCalendar} />
                    <div style={{height: 5}}>
                        <img className="dot" src={IconDot} />
                    </div>
                </div>
                <div className="dock-col">
                    <img className="dock-icon" src={IconMemo} />
                    <div style={{height: 5}}>
                        <img className="dot" src={IconDot} />
                    </div>
                </div>
                <div className="dock-col">
                    <img className="dock-icon" src={IconSetting} />
                    <div style={{height: 5}}>
                        <img className="dot" src={IconDot} />
                    </div>
                </div>
                <div className="dock-col">
                    <img className="dock-icon" src={IconPhotoshop} />
                    <div style={{height: 5}}>
                        <img className="dot" src={IconDot} />
                    </div>
                </div>
                <div className="dock-col">
                    <img className="dock-icon" src={IconIllust} />
                    <div style={{height: 5}}>
                        <img className="dot" src={IconDot} />
                    </div>
                </div>
                <div className="dock-col">
                    <img className="dock-icon" src={IconPremiere} />
                    <div style={{height: 5}}>
                        <img className="dot" src={IconDot} />
                    </div>
                </div>
                <div className="dock-col">
                    <img className="dock-icon" src={IconAE} />
                    <div style={{height: 5}}>
                        <img className="dot" src={IconDot} />
                    </div>
                </div>
                <div className="dock-col">
                    <img className="dock-icon" src={IconMaya} />
                    <div style={{height: 5}}>
                        <img className="dot" src={IconDot} />
                    </div>
                </div>
                <div className="dock-col">
                    <img className="dock-icon" src={IconWord} />
                    <div style={{height: 5}}>
                        <img className="dot" src={IconDot} />
                    </div>
                </div>
                <div className="dock-col">
                    <img className="dock-icon" src={IconExcel} />
                    <div style={{height: 5}}>
                        <img className="dot" src={IconDot} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dock;