
import React, { useState, useEffect, useContext } from 'react';
import '../../App.css';
import { useHistory } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import './maya.css';

import { Dock } from '../../components';

// import Clock from 'react-live-clock';
import { UserContext } from '../../providers/UserProvider';

/* absolute */
import IconRed from '../../data/icons/btn_red.svg';
import IconYellow from '../../data/icons/btn_yellow.svg';
import IconGreen from '../../data/icons/btn_green.svg';

import Intro from '../../data/images/마야 인트로.svg';
import Image0 from '../../data/images/마야 작업화면_full screen.png';


const text = [
    {
        location: '/User/soheelim/desktop/2020-2/',
        title: 'final (1)',
        url: Image0,
    }
]



const MayaPage = ({num}) => {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const [showIntro, setShowIntro] = useState(true);

  const index = num !== undefined ? num : 0;

  const item = text[index]

  useEffect(() => {
    setTimeout(() => {
        setShowIntro(false);
    }, 0)
  }, [])


  return (
    <div className="maya-background">
        {/* <div className="desktop-top-floating">
            <div className='header-text'>Dec 31</div>
            <div className='header-text'><Clock format={'HH:mm A'} ticking={true} /></div>
        </div> */}

        {showIntro
        ?
        /* 왜 안 나오는지 모르겠네 이미지가 안 나옴 */
        <img className="maya-intro" src={Intro} />
        :
        <>
        <div className="header-back" style={{backgroundColor: "#e9e9e9"}}>
            <div className="window-btn-container">
                <img className="window-btn click" src={IconRed} onClick={() => history.goBack()} />
                <img className="window-btn click" src={IconYellow} onClick={() => history.goBack()} />
                <img className="window-btn click" src={IconGreen} />
            </div>
            <div className="maya-header-text">
                Autodesk Maya 2018 - Student Version: 
                {item.location}{item.title}.mb
            </div>
        </div>

        <div className="maya-container">
            <img className="maya-image" src={item.url} />
        </div>
        </>
        }

        
        <Dock now='maya' />
    </div>
  );
}

export default MayaPage;
