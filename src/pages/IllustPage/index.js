
import React, { useState, useEffect, useContext } from 'react';
import '../../App.css';
import { useHistory } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import './illust.css';

import { Dock } from '../../components';

// import Clock from 'react-live-clock';
import { UserContext } from '../../providers/UserProvider';

/* absolute */
import IconRed from '../../data/icons/btn_red.svg';
import IconYellow from '../../data/icons/btn_yellow.svg';
import IconGreen from '../../data/icons/btn_green.svg';

import Image0 from '../../data/images/일러스트 작업화면.png';


const text = [
    {
        location: '/User/soheelim/documents/대외활동/',
        title: '2019비주얼가이드 (1)',
        url: Image0,
    }
]



const IllustPage = ({num}) => {
  const history = useHistory();
  const { user } = useContext(UserContext);

  const index = num !== undefined ? num : 0;

  const item = text[index]


  return (
    <div className="illust-background">
        {/* <div className="desktop-top-floating">
            <div className='header-text'>Dec 31</div>
            <div className='header-text'><Clock format={'HH:mm A'} ticking={true} /></div>
        </div> */}
        <div className="header-back" style={{backgroundColor: "#e9e9e9"}}>
            <div className="window-btn-container">
                <img className="window-btn click" src={IconRed} onClick={() => history.goBack()} />
                <img className="window-btn click" src={IconYellow} onClick={() => history.goBack()} />
                <img className="window-btn click" src={IconGreen} />
            </div>
            <div className="illust-header-text">{item.location}{item.title}.ai</div>
        </div>

        <div className="illust-container">
            <img className="illust-image" src={item.url} />
        </div>
        <Dock now='illust' />
    </div>
  );
}

export default IllustPage;
