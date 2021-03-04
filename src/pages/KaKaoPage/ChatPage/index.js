
import React, { useState, useEffect, useContext } from 'react';
import '../../../App.css';
import { useHistory } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import './chat.css';

import { Dock } from '../../../components';

// import Clock from 'react-live-clock';
import { UserContext } from '../../../providers/UserProvider';

/* absolute */
import IconRed from '../../../data/icons/btn_red.svg';
import IconYellow from '../../../data/icons/btn_yellow.svg';
import IconGreen from '../../../data/icons/btn_green.svg';

import ChatList_나 from '../../../data/images/나와 채팅.svg';
import ChatList_공모전 from '../../../data/images/채팅목록_공모전.svg';
import ChatList_다람이 from '../../../data/images/채팅목록_다람이.svg';
import ChatList_동기들 from '../../../data/images/채팅목록_동기들.svg';
import ChatList_서포터즈 from '../../../data/images/채팅목록_서포터즈.svg';
import ChatList_아빠 from '../../../data/images/채팅목록_아빠.svg';
import ChatList_엄마 from '../../../data/images/채팅목록_엄마.svg';
import ChatList_이세린 from '../../../data/images/채팅목록_이세린.svg';
import ChatList_임희준 from '../../../data/images/채팅목록_임희준.svg';
import ChatList_콘마스 from '../../../data/images/채팅목록_콘마스.svg';
import ChatList_한울자매 from '../../../data/images/채팅목록_한울자매.svg';

import Chat_공모전 from '../../../data/images/채팅_공모전.svg';
// import Chat_나 from '../../../data/images/채팅_나.svg';
import Chat_나 from '../../../data/images/나.svg';
import Chat_동기들 from '../../../data/images/채팅_동기들.svg';
import Chat_서포터즈 from '../../../data/images/채팅_서포터즈.svg';
//import Chat_아빠 from '../../../data/images/채팅_아빠.svg';
import Chat_아빠 from '../../../data/images/아빠.svg';
// import Chat_엄마 from '../../../data/images/채팅_엄마.svg';
import Chat_엄마 from '../../../data/images/엄마.svg';
import Chat_이세린 from '../../../data/images/채팅_이세린.svg';
// import Chat_임희준 from '../../../data/images/채팅_임희준.svg';
import Chat_임희준 from '../../../data/images/임희준.svg';
// import Chat_콘마스 from '../../../data/images/채팅_콘마스.svg';
import Chat_콘마스 from '../../../data/images/콘텐츠 마케팅 스터디.svg';
import Chat_한울자매 from '../../../data/images/채팅_한울자매.svg';
import Chat_최수진 from '../../../data/images/최수진.svg';
import Chat_GS25 from '../../../data/images/GS25 사장님.svg';

import Footer_Chat from '../../../data/images/채팅 푸터.svg';

import Header_공모전 from '../../../data/images/톡방헤더_공모전.svg';
import Header_동기들 from '../../../data/images/톡방헤더_동기들.svg';
import Header_서포터즈 from '../../../data/images/톡방헤더_서포터즈.svg';
import Header_콘마스 from '../../../data/images/톡방헤더_콘마스.svg';
import Header_한울자매 from '../../../data/images/톡방헤더_한울자매.svg';
import Header_나 from '../../../data/images/톡방헤더_나.svg';
import Header_동생 from '../../../data/images/톡방헤더_임희준.svg';
import Header_아빠 from '../../../data/images/톡방헤더_아빠.svg';
import Header_엄마 from '../../../data/images/톡방헤더_엄마.svg';
import Header_이세린 from '../../../data/images/톡방헤더_이세린.svg';

import Icon_Chat from '../../../data/images/채팅 버튼.svg';
import Icon_Friend from '../../../data/images/친구 버튼.svg';



const KakaoChatPage = ({num}) => {
  const history = useHistory();
  const { user } = useContext(UserContext);

  const [nowChat, setNowChat] = useState(null);
  const [showItem, setShowItem] = useState(null);
  const [showFloating, setShowFloating] = useState(null);

  useEffect(() => {
    if(nowChat==='공모전') {
        setShowItem(Chat_공모전); 
        setShowFloating(Header_공모전);
    }
    else if(nowChat==='나') {
        setShowItem(Chat_나); 
        setShowFloating(Header_나);
    }
    else if(nowChat==='동기들') {
        setShowItem(Chat_동기들); 
        setShowFloating(Header_동기들);
    }
    else if(nowChat==='서포터즈') {
        setShowItem(Chat_서포터즈); 
        setShowFloating(Header_서포터즈);
    }
    else if(nowChat==='아빠') {
        setShowItem(Chat_아빠); 
        setShowFloating(Header_아빠);
    }
    else if(nowChat==='엄마') {
        setShowItem(Chat_엄마); 
        setShowFloating(Header_엄마);
    }
    else if(nowChat==='이세린') {
        setShowItem(Chat_이세린); 
        setShowFloating(Header_이세린);
    }
    else if(nowChat==='임희준') {
        setShowItem(Chat_임희준); 
        setShowFloating(Header_동생);
    }
    else if(nowChat==='콘마스') {
        setShowItem(Chat_콘마스); 
        setShowFloating(Header_콘마스);
    }
    else if(nowChat==='한울자매') {
        setShowItem(Chat_한울자매); 
        setShowFloating(Header_한울자매);
    }
    console.log(user)
  }, [nowChat])



  return (
    <div className="chat-background">
        {/* <div className="desktop-top-floating">
            <div className='header-text'>Dec 31</div>
            <div className='header-text'><Clock format={'HH:mm A'} ticking={true} /></div>
        </div> */}
        <div className="header-back kakao-window" style={{backgroundColor: "#e9e9e9"}}>
            <div className="window-btn-container">
                <img className="window-btn click" src={IconRed} onClick={() => history.goBack()} />
                <img className="window-btn click" src={IconYellow} onClick={() => history.goBack()} />
                <img className="window-btn click" src={IconGreen} />
            </div>
            <div className="chat-header-text">카카오톡 채팅</div>
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
                    <div className="chat-header" />
                    <img className="click chat-list-item" src={ChatList_공모전} onClick={() => setNowChat('공모전')} />
                    <img className="click chat-list-item" src={ChatList_다람이} onClick={() => setNowChat('나')} />
                    <img className="click chat-list-item" src={ChatList_동기들} onClick={() => setNowChat('동기들')} />
                    <img className="click chat-list-item" src={ChatList_서포터즈} onClick={() => setNowChat('서포터즈')} />
                    <img className="click chat-list-item" src={ChatList_아빠} onClick={() => setNowChat('아빠')} />
                    <img className="click chat-list-item" src={ChatList_엄마} onClick={() => setNowChat('엄마')} />
                    <img className="click chat-list-item" src={ChatList_이세린} onClick={() => setNowChat('이세린')} />
                    <img className="click chat-list-item" src={ChatList_임희준} onClick={() => setNowChat('임희준')} />
                    <img className="click chat-list-item" src={ChatList_콘마스} onClick={() => setNowChat('콘마스')} />
                    <img className="click chat-list-item" src={ChatList_한울자매} onClick={() => setNowChat('한울자매')} />
                </div>
                </Col>
                <Col>
                <div className="chat-detail-container">
                    <img className="chat-detail-header" src={showFloating} />
                    { nowChat === '나' &&
                    <div className="chat-user-name">{user !== null ? user.name : 'You'}</div>
                    }
                    <img className="chat-detail" src={showItem} />
                    { showItem !== null &&
                        <img className="chat-detail-footer" src={Footer_Chat} />
                    }
                </div>
                </Col>
            </Row>
        </div>
        {/* <Dock now='kakao' /> */}
    </div>
  );
}

export default KakaoChatPage;
