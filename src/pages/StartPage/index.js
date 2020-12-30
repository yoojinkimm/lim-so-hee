
import React, { useState } from 'react';
import '../../App.css';
import { useHistory } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import './start.css';

// import PWinput from '../../data/icons/password.svg';
import IconCancel from '../../data/icons/cancel icon.svg';
import Header from '../../data/icons/header.svg';

import Profile from '../../data/images/profile.png';
import ImageTutorial from '../../data/images/tutorial.png';
import ImageAbout from '../../data/images/about.png';
import ImageInput from '../../data/images/start_input.png';

import Clock from 'react-live-clock';

const StartPage = () => {
  const history = useHistory();
  const [password, setPassword] = useState("")
  const [showTutorial, setShowTutorial] = useState(false);
  const [showCredit, setShowCredit] = useState(false);

  const handleNext = (e) => {
      if(e.key === "Enter")  history.push('/desktop')
  }

  const popTutorial = () => {
    setShowTutorial(true);
    setShowCredit(false);
  }

  const popCredit = () => {
    setShowTutorial(false);
    setShowCredit(true);
  }

  

  return (
    <div className="start-background">
        <div className="start-top-floating">
            <div className='header-text'>Dec 31</div>
            <div className='header-text'><Clock format={'HH:mm A'} ticking={true} /></div>
        </div>
        <img className="start-circle" src={Profile} />
        <div className="start-title">Sohee Lim</div>

        <div>
            <input 
            className="start-input"
            value={password}
            onKeyPress={handleNext}
            onChange={(e) => setPassword(e.target.value)}
            /* placeholder="게임 시작 : Enter 입력" */
            />
        </div>

        <div className="start-bottom-floating">
                <div className='cancel-text click' onClick={() => popTutorial()}>게임방법</div>
                <div className='cancel-text click' onClick={() => popCredit()}>About</div>
        </div>

    {showTutorial && 
    <div className="start-image">
      <img className="start-image" src={ImageTutorial} />
      <div className="close-btn click" onClick={() => setShowTutorial(false)}></div>
    </div>
    }
    {showCredit && 
    <div className="start-image">
      <img className="start-image" src={ImageAbout} />
      <div className="close-btn click" onClick={() => setShowCredit(false)}></div>
    </div>
    }
    </div>
  );
}

export default StartPage;
