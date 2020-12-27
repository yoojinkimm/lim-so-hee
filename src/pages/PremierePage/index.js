
import React, { useState, useEffect, useContext } from 'react';
import '../../App.css';
import { useHistory } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import './premiere.css';

import { Dock } from '../../components';

// import Clock from 'react-live-clock';
import { UserContext } from '../../providers/UserProvider';

/* absolute */
import IconRed from '../../data/icons/btn_red.svg';
import IconYellow from '../../data/icons/btn_yellow.svg';
import IconGreen from '../../data/icons/btn_green.svg';

import Image0 from '../../data/images/premiere-다큐1.png';


const text = [
    {
        location: '/User/limsohee/desktop/동아리/',
        title: '다큐멘터리',
        url: Image0,
    }
]



const PremierePage = ({num}) => {
  const history = useHistory();
  const { user } = useContext(UserContext);

  const index = num !== undefined ? num : 0;

  const item = text[index]


  return (
    <div className="premiere-background">
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
            <div className="premiere-header-text">{item.location}{item.title}.prproj</div>
        </div>

        <div className="premiere-container">
            <img className="premiere-image" src={item.url} />
        </div>
        <Dock now='premiere' />
    </div>
  );
}

export default PremierePage;
