
import React, { useState, useEffect, useContext } from 'react';
import '../../App.css';
import { useHistory } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import './desktop.css';


import { Dock, Folder, TaxiPopup } from '../../components';

import Clock from 'react-live-clock';
import { UserContext } from '../../providers/UserProvider';




const DesktopPage = () => {
  const history = useHistory();
  const [password, setPassword] = useState("")
  const { user } = useContext(UserContext);

  const [showTaxi, setShowTaxi] = useState(false);

  useEffect(() => {
      if( user !== null) console.log('현재 이용자: ', user.name)
  }, [])

  const goInstagram = () => {
      window.open(`https://www.instagram.com/lsh_623/`)
  }

  return (
    <div className="desktop-background">
        <div className="desktop-top-floating">
            <div className='header-text'>Dec 31</div>
            <div className='header-text'><Clock format={' h:mm A'} ticking={true} /></div>
        </div>

        <div className="desktop-contents">
            <Row style={{width: '100%'}}>
                <Col></Col>
                <Col sm={2} md={2} lg={2}>
                </Col>
                <Col sm={2} md={2} lg={2}>
                    <Folder name={'취업준비'} />
                </Col>
            </Row>
             <Row style={{width: '100%'}}>
                <Col sm={2} md={2} lg={2}>
                </Col>
            </Row>
             <Row style={{width: '100%'}}>
                <Col sm={2} md={2} lg={2}>
                </Col>
                <Col>
                    <div onClick={() => setShowTaxi(true)}
                    style={{fontSize: 36, color: 'yellow'}}>
                        카카오 택시
                    </div>
                </Col>
                <Col>
                    <div onClick={() => goInstagram()}
                    style={{fontSize: 36, color: 'pink'}}>
                        인스타그램
                    </div>
                </Col>
            </Row>
        </div>

        <Dock />

        <TaxiPopup show={showTaxi} setShow={setShowTaxi} />
    </div>
  );
}

export default DesktopPage;
