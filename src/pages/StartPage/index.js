
import React, { useState } from 'react';
import '../../App.css';
import { useHistory } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import './start.css';

// import PWinput from '../../data/icons/password.svg';
import IconCancel from '../../data/icons/cancel icon.svg';
import Header from '../../data/icons/header.svg';

import Clock from 'react-live-clock';

const StartPage = () => {
  const history = useHistory();
  const [password, setPassword] = useState("")

  const handleNext = (e) => {
      if(e.key === "Enter")  history.push('/desktop')
  }

  

  return (
    <div className="start-background">
        <div className="start-top-floating">
            <div className='header-text'>Dec 31</div>
            <div className='header-text'><Clock format={'HH:mm A'} ticking={true} /></div>
        </div>
        <div className="start-circle" />
        <div className="start-title">Sohee Lim</div>

        <div>
            <input 
            className="start-input"
            value={password}
            onKeyPress={handleNext}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter를 입력하세요."
            />
        </div>

        <div className="start-bottom-floating">
                <img className='start-cancel'
                onClick={() => history.goBack()}
                src={IconCancel} />
                <div className='cancel-text' onClick={() => history.goBack()}>취소</div>
        </div>
    </div>
  );
}

export default StartPage;
