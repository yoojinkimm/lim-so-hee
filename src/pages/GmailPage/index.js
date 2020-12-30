
import React, { useState, useEffect, useContext } from 'react';
import '../../App.css';
import { useHistory } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import './gmail.css';

import { Dock } from '../../components';

// import Clock from 'react-live-clock';
import { UserContext } from '../../providers/UserProvider';

/* absolute */
import gmailFooter from '../../data/images/google-bottom.svg';
import GmailAddress from '../../data/images/gmail_address.svg';
import IconRed from '../../data/icons/btn_red.svg';
import IconYellow from '../../data/icons/btn_yellow.svg';
import IconGreen from '../../data/icons/btn_green.svg';

/* header */
import IconMenu from '../../data/images/google_menu icon.svg';
import IconAccount from '../../data/images/google_account_icon.svg';
import TextGmail from '../../data/icons/Gmail_icon.svg';
import LogoGmail from '../../data/icons/Gmail-Logo.svg';
import IconSetting from '../../data/icons/gmail_setting.svg';

import IconCheck from '../../data/icons/check.svg';
import IconBack from '../../data/icons/Back Button.svg';
import TextDate from '../../data/images/Date Star.svg';
import TextSender from '../../data/images/Sender.svg';

import MoneyEmail from '../../data/images/money_email.png';
import MoneyMailHeader from '../../data/images/지메일 타이틀_한국장학재단.svg';

const receivedList = [
      {mail: 'jewoo_recruit@gmail.com', title: '[(주)제우 Internship 4기 면접 결과 발표드립니다.]', date: '12월 23일', show: 0},
      {mail: 'kosaf@kosaf.go.kr', title: '2020년 2학기 학자금대출 실행 및 핵심설명서 안내', date: '11월 15일', show: 1},
]

const sentList = [
      {mail: '제우 인사팀', title: '동계 인턴십 서류 지원', date: '11월 16일'},
      {mail: '한국장학재단', title: '2020-2학기 생활비 대출 신청', date: '11월 10일'},
]

const mail_contents = [
    {
        title: '[(주)제우 Internship 4기 면접 결과 발표드립니다.]',
        contents: 
        <>
            안녕하세요, (주)제우 인턴 모집 담당자입니다. <br />
            먼저 바쁘신 와중에도 귀한 시간을 할애하여 지원해주신 점  <br />
            깊은 감사의 말씀 드립니다.  <br />
            <br />
            이번 면접에서 귀하의 능력과 자질은 높이 평가되었으나, <br />
            제한된 인원 선발 등의 사유로 불합격 하셨음을  <br />
            아쉬운 마음으로 안내드립니다.<br />
            <br />
            보내주신 열정과 참여에 다시 한 번 진심으로 감사 말씀 드리며,  <br />
            더 좋은 기회에, 더 좋은 자리에서 만나뵙길 진심으로 바라겠습니다.  <br />
            <br />
            감사합니다. <br />
        </>
    },
    {
        title: '2020년 2학기 학자금대출 실행 및 핵심설명서 안내',
        contents: 
        <>
            <img className="email-image" src={MoneyEmail} />
        </>
    },
]



const GmailPage = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const [showMailbox, setShowMailBox] = useState(0);
  const [showMailNum, setShowMailNum] = useState(-1);



  const showMailList = () => {
      var list = []

      if(showMailbox === 0) list = receivedList;
      else list = sentList;

      return(
          <>
           {list.map((item, index) => {
               return(
                   <>
                   {item.show !== undefined
                   ?
                   <div className="mail-item click"
                   onClick={()=>{setShowMailNum(item.show)}}
                   style={{backgroundColor: showMailbox === 1 ?  'rgba(200,200,200, 0.2)' : 'white'}}>
                       <Col sm={3} md={3} lg={3}>
                           <img src={IconCheck} style={{marginRight: 16}} />
                           {showMailbox === 1 && '받는사람: '}
                           {item.mail}
                       </Col>
                       <Col>{item.title}</Col>
                       <Col sm={1} md={1} lg={1}>{item.date}</Col>
                   </div>
                   :
                   <div className="mail-item"
                   style={{backgroundColor: showMailbox === 1 ?  'rgba(200,200,200, 0.2)' : 'white'}}>
                       <Col sm={3} md={3} lg={3}>
                           <img src={IconCheck} style={{marginRight: 16}} />
                           {showMailbox === 1 && '받는사람: '}
                           {item.mail}
                       </Col>
                       <Col>{item.title}</Col>
                       <Col sm={1} md={1} lg={1}>{item.date}</Col>
                   </div>
                    }
                   </>
               )
           })}
          </>
      )
  }


  const showMailContent = () => {
      let nowItem = mail_contents[showMailNum]
      return (
        <div className="mail-cotents-container">
            <img className="click" src={IconBack} onClick={() => setShowMailNum(-1)} />
            {showMailNum === 0 &&
            <div className="mail-contents-title">{nowItem.title}</div>
            }
            <div className="mail-contents-header">
                {showMailNum === 0 &&
                <>
                    <img src={TextSender} />
                    <img src={TextDate} />
                </>
                }
                 {showMailNum === 1 &&
                 <img style={{marginTop: 30}} src={MoneyMailHeader} />
                 }
            </div>

            <div className="mail-contents-text">{nowItem.contents}</div>
        </div>
      )
  }

  const changeMailBox = (index) => {
      setShowMailBox(index);
      setShowMailNum(-1);
  }

  return (
    <div className="gmail-background">
        {/* <div className="desktop-top-floating">
            <div className='header-text'>Dec 31</div>
            <div className='header-text'><Clock format={'HH:mm A'} ticking={true} /></div>
        </div> */}
        <div className="header-back">
            <div className="window-btn-container">
                <img className="window-btn click" src={IconRed} onClick={() => history.go(-2)} />
                <img className="window-btn click" src={IconYellow} onClick={() => history.go(-2)} />
                <img className="window-btn click" src={IconGreen} />
            </div>

            <img className="gmail-address" src={GmailAddress} />
        </div>


        <div className="gmail-contents">
            <div className="gmail-header">
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <img className="gmail-logo profile-logo" src={LogoGmail} />
                    <img className="gmail-text profile-logo" src={TextGmail} />
                </div>
                
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <img className="gmail-setting profile-logo" src={IconSetting} />
                    <img className="gmail-menu profile-logo" src={IconMenu} />
                    <img className="gmail-account profile-logo" src={IconAccount} />
                </div>
            </div>
        <Row style={{width: '100%', height: '100%'}}>
            {/* menu */}
            <Col sm={2} md={2} lg={2} className="mail-menu">
                <div className="mail-menu-item click" 
                style={{backgroundColor: showMailbox === 0 && 'rgba(219,48,37, 0.5)'}}
                onClick={() => changeMailBox(0)}>
                    <div>받은편지함</div><div>{receivedList.length}</div>
                </div>
                <div className="mail-menu-item click" 
                style={{backgroundColor: showMailbox === 1 && 'rgba(219,48,37, 0.5)'}}
                onClick={() => changeMailBox(1)}>
                    <div>보낸편지함</div><div>{sentList.length}</div>
                </div>
            </Col>

            {/* mail list */}
            <Col sm={10} md={10} lg={10}>
                { showMailNum === 0 &&
                    showMailContent()
                }
                { showMailNum === 1 &&
                    showMailContent()
                }
                { showMailNum === -1 &&
                    showMailList()
                }
            </Col>
        </Row>
            
        </div>

        {/* <Dock now='sapari' /> */}
    </div>
  );
}

export default GmailPage;
