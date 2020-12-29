
import React, { useState, useEffect, useContext } from 'react';
import '../../../App.css';
import { useHistory } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import './kakao.css';

import { Dock } from '../../../components';

// import Clock from 'react-live-clock';
import { UserContext } from '../../../providers/UserProvider';

/* absolute */
import IconRed from '../../../data/icons/btn_red.svg';
import IconYellow from '../../../data/icons/btn_yellow.svg';
import IconGreen from '../../../data/icons/btn_green.svg';

import Icon_Chat from '../../../data/images/채팅 버튼.svg';
import Icon_Friend from '../../../data/images/친구 버튼.svg';

import Profile from '../../../data/images/프로필+즐찾.svg';
import FriendList from '../../../data/images/친구 목록.svg';


const KakaoPage = ({num}) => {
  const history = useHistory();
  const { user } = useContext(UserContext);



  return (
    <div className="kakao-background">
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
            <div className="kakao-header-text">카카오톡</div>
        </div>

         <div className="chat-container">
            <Row style={{width: '100%', height: '100%'}}>
                <Col sm={1} md={1} lg={1} xl={1} className="chat-menu">
                    <img className="click kakao-menu" src={Icon_Friend} onClick={() => history.push('/kakao')} />
                    <img className="click kakao-menu" src={Icon_Chat} onClick={() => history.push('/kakao/chat')} />
                </Col>
                <Col 
                sm={4} md={4} lg={4} xl={4}>
                  
                <div className="chat-list">
                  <img className="friend-item" src={Profile} />
                  <img className="friend-item" src={FriendList} />
                </div>
                </Col>
                <Col>
                </Col>
            </Row>
        </div>
        {/* <Dock now='kakao' /> */}
    </div>
  );
}

export default KakaoPage;
