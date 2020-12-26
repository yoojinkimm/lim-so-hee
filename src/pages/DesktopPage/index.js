
import React, { useState } from 'react';
import '../../App.css';
import { useHistory } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import './desktop.css';


import Clock from 'react-live-clock';

const DesktopPage = () => {
  const history = useHistory();
  const [password, setPassword] = useState("")

  

  return (
    <div className="desktop-background">
        <div className="desktop-top-floating">
            <div className='header-text'><Clock format={'ddd MMM D HH:mm A'} ticking={true} /></div>
        </div>

        <div>
        </div>

        <div className="desktop-bottom-floating">
            <div className="desktop-dock">
                <div style={{fontSize: 20, color: 'black', margin: 10}}>파인더</div>
                <div style={{fontSize: 20, color: 'black', margin: 10}}>런치패드</div>
                <div style={{fontSize: 20, color: 'black', margin: 10}}>카톡</div>
                <div style={{fontSize: 20, color: 'black', margin: 10}}>캘린더</div>
                <div style={{fontSize: 20, color: 'black', margin: 10}}>메모장</div>
                <div style={{fontSize: 20, color: 'black', margin: 10}}>일러</div>
                <div style={{fontSize: 20, color: 'black', margin: 10}}>포토샵</div>
                <div style={{fontSize: 20, color: 'black', margin: 10}}>프리미어</div>
                <div style={{fontSize: 20, color: 'black', margin: 10}}>마야</div>
                <div style={{fontSize: 20, color: 'black', margin: 10}}>워드</div>
            </div>
        </div>
    </div>
  );
}

export default DesktopPage;
