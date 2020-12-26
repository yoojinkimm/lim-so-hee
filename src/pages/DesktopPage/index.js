
import React, { useState, useEffect, useContext } from 'react';
import '../../App.css';
import { useHistory } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import './desktop.css';


import { Dock, Folder } from '../../components';

import Clock from 'react-live-clock';
import { UserContext } from '../../providers/UserProvider';




const DesktopPage = () => {
  const history = useHistory();
  const [password, setPassword] = useState("")
  const { user } = useContext(UserContext);

  useEffect(() => {
      if( user !== null) console.log('현재 이용자: ', user.name)
  }, [])

  

  return (
    <div className="desktop-background">
        <div className="desktop-top-floating">
            <div className='header-text'>Dec 31</div>
            <div className='header-text'><Clock format={'HH:mm A'} ticking={true} /></div>
        </div>

        <div className="desktop-contents">
            <Row style={{width: '100%'}}>
                <Col></Col>
                <Col sm={2} md={2} lg={2}>
                    <Folder name={'포폴'} />
                </Col>
                <Col sm={2} md={2} lg={2}>
                    <Folder name={'자소서'} />
                </Col>
            </Row>
             <Row style={{width: '100%'}}>
                <Col sm={2} md={2} lg={2}>
                    <Folder name={'사진'} />
                </Col>
            </Row>
             <Row style={{width: '100%'}}>
                <Col sm={2} md={2} lg={2}>
                    <Folder name={'삼성 백업'} />
                </Col>
                <Col></Col>
            </Row>
        </div>

        <Dock />
    </div>
  );
}

export default DesktopPage;
