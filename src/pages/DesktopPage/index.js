
import React, { useState, useEffect, useContext } from 'react';
import '../../App.css';
import { useHistory } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import './desktop.css';


import { Dock, Folder, TaxiPopup } from '../../components';

import Clock from 'react-live-clock';
import { UserContext } from '../../providers/UserProvider';

import InstaIcon from '../../data/icons/Instagram_icon.png';
import TaxiIcon from '../../data/icons/카카오택시 아이콘.svg';
import StickerMemo from '../../data/images/스티커메모.svg';


const DesktopPage = () => {
  const history = useHistory();
  const [password, setPassword] = useState("")
  const { user, f2020, setF2020, job, setJob, taxi, setTaxi } = useContext(UserContext);

  useEffect(() => {
      // if( user !== null) console.log('현재 이용자: ', user.name)
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
                    <Folder name={'2020-2'} show={f2020} setShow={setF2020} />
                </Col>
                <Col sm={2} md={2} lg={2}>
                    <Folder name={'취업준비'} show={job} setShow={setJob} />
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
                    <div className="click icon" onClick={() => setTaxi(true)}>
                        <img className="icon-img" src={TaxiIcon} />
                        <div className="icon-txt">장소 입력</div>
                    </div>
                </Col>
                <Col>
                    <div className="click icon" onClick={() => goInstagram()}>
                        <img className="icon-img" src={InstaIcon} />
                        <div className="icon-txt">내 계정 바로가기</div>
                    </div>
                </Col>
            </Row>
            <Row style={{width: '100%'}}>
                <Col>
                    <div className='sticker-memo-container'>
                        <img className='sticker-memo' src={StickerMemo} />
                        <div className="todo-text">
                            todo <br />
                            <br />
                            방학 목표: 토익 900 넘기 <br />
                            자소서 3번 초안 다 쓰기 <br />
                            블로그 글 쓰기 <br />
                            콘마스 세션 준비 <br />
                        </div>
                    </div>
                </Col>
                <Col></Col>
                <Col></Col>
            </Row>
        </div>

        {/* <Dock /> */}

        <TaxiPopup show={taxi} setShow={setTaxi} />
    </div>
  );
}

export default DesktopPage;
