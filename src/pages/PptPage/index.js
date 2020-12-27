
import React, { useState, useEffect, useContext } from 'react';
import '../../App.css';
import { useHistory } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import './ppt.css';

import { Dock } from '../../components';

// import Clock from 'react-live-clock';
import { UserContext } from '../../providers/UserProvider';

/* absolute */
import IconRed from '../../data/icons/btn_red.svg';
import IconYellow from '../../data/icons/btn_yellow.svg';
import IconGreen from '../../data/icons/btn_green.svg';

import Image0 from '../../data/images/공모전.png';
import Image1 from '../../data/images/공모전2.png';
import Image2 from '../../data/images/대외활동.png';
import Image3 from '../../data/images/웹디 과제.png';
import Image4 from '../../data/images/인창 과제.png';
import Image5 from '../../data/images/종세문 과제.png';


const text = [
    {
        location: '/User/limsohee/desktop/동아리/',
        title: '공모전 최종',
        url: Image0,
    },
    {
        location: '/User/limsohee/desktop/동아리/',
        title: '아이디어 공모전 최종',
        url: Image1,
    },
    {
        location: '/User/limsohee/desktop/동아리/',
        title: '마케팅 대외활동',
        url: Image2,
    },
    {
        location: '/User/limsohee/desktop/동아리/',
        title: '웹디 과제',
        url: Image3,
    },
    {
        location: '/User/limsohee/desktop/동아리/',
        title: '인창 과제',
        url: Image4
    },
    {
        location: '/User/limsohee/desktop/동아리/',
        title: '종세문 과제',
        url: Image4
    },
];



const PptPage = ({num}) => {
  const history = useHistory();
  const { user } = useContext(UserContext);

  const index = num !== undefined ? num : 0;

  const item = text[index]


  return (
    <div className="ppt-background">
        {/* <div className="desktop-top-floating">
            <div className='header-text'>Dec 31</div>
            <div className='header-text'><Clock format={'HH:mm A'} ticking={true} /></div>
        </div> */}
        <div className="header-back" style={{backgroundColor: "#ba4c21"}}>
            <div className="window-btn-container">
                <img className="window-btn click" src={IconRed} onClick={() => history.goBack()} />
                <img className="window-btn click" src={IconYellow} onClick={() => history.goBack()} />
                <img className="window-btn click" src={IconGreen} />
            </div>
            <div className="ppt-header-text">{item.location}{item.title}.pptx</div>
        </div>

        <div className="ppt-container">
            <img className="ppt-image" src={item.url} />
        </div>
        <Dock now='ppt' />
    </div>
  );
}

export default PptPage;
