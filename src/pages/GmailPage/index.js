
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

import SoheeEmail from '../../data/images/소희_이메일.png';
import YoonhaEmail from '../../data/images/윤하_이메일.svg';

const receivedList = [
      {mail: 'jewoo_recruit@gmail.com', title: '[(주)제우 Internship 4기 면접 결과 발표드립니다.]', date: '12월 23일', show: 0},
      {mail: 'yoonha_cho@gmail.com', title: '소희야 안녕?', date: '12월 1일', show: 2},
      {mail: 'kosaf@kosaf.go.kr', title: '2020년 2학기 학자금대출 실행 및 핵심설명서 안내', date: '11월 15일', show: 1},
]

const sentList = [
      {mail: 'bhkaaa34@gmail.com', title: 'GS25 정발산역점 야간타임 아르바이트 지원', date: '12월 24일'},
      {mail: 'megaCoffee@megacf.co.kr', title: '메가커피 신촌점 평일 오전타임 아르바이트 지원', date: '12월 23일'},
      {mail: 'nnmxc786@gmail.com', title: '파리바게트 대흥역점 주말 오후타임 아르바이트 지원', date: '12월 21일'},
      {mail: 'sy12gm@naver.com', title: '메가박스 신촌점 평일 저녁 아르바이트 지원', date: '12월 19일'},
      {mail: 'pye1280@gmail.com', title: '롯데시네마 홍대입구 주말 미들 아르바이트 지원', date: '12월 18일'},
      {mail: 'cj_hr@cj.co.kr', title: 'CJ ENM 인사팀 사무보조 아르바이트 지원', date: '12월 16일'},
      {mail: 'cj_maketing@cj.co.kr', title: 'CJ ENM 인사팀 사무보조 아르바이트 지원', date: '12월 16일'},
      {mail: 'yoonha_cho@gmail.com', title: 'RE : 소희야 안녕?', date: '12월 1일', show: 2},
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
    {
        title: '소희야 안녕?',
        contents: 
        <>
            <div className="mail-contents-header">
                <img src={YoonhaEmail} style={{height: 56}} />
            </div>
            <><br /><br />
                소희야!! 나 도솔중학교 2학년 3반이었던 조윤하인데 기억나? 이사하다가 옛날에 반 친구들한테 받았던 편지를 발견했는데 거기 너 이메일이 있더라! 아직 이 이메일 쓰고 있으면 좋겠네ㅜㅜ 반가워서 메일 보내본다. 잘 지내?
                <br /><br /><br /><br />
            </>

            <div className="mail-contents-header">
                <img src={SoheeEmail} style={{height: 56}} />
            </div>
            <><br /><br />
                헉 윤하야!!! 아침에 알림 보고 깜짝 놀랐어...! 너무 반갑다ㅜㅜ 너 미국 간 이후로 처음 연락하는 거지? 거기는 좀 살만해? 나는 잘 지내지 이번에 대학교 4학년 졸업반이고 취준하고 있어ㅋㅋㅋㅋ 너도 지금 대학생인건가? 만약 그러면 뭐 전공하고 있어? 나는 문화콘텐츠학과 다니고 있어! 너무 오랜만이라 진짜 다 궁금하다
                <br /><br /><br /><br />
            </>

            <div className="mail-contents-header">
                <img src={YoonhaEmail} style={{height: 56}} />
            </div>
            <><br /><br />
                여기는 날씨가 오락가락 안해서 좋아 인종차별이 좀 있긴 하지만 ㅋㅋㅋㅋ 진짜 너무 반갑다! 나는 뉴욕대 미대 다니고 있구 나도 취업하려고 인터뷰 보러 다니고 있어. 문화콘텐츠라니 역시 그런 쪽으로 갔구나 옛날부터 뭐 보는 거 엄청 좋아하고 혼자 글쓰는 거 봤을 때부터 그럴 거라고 생각했어 중학교 친구들 중에는 연락하는 애들 있어??
                <br /><br /><br /><br />
            </>

            <div className="mail-contents-header">
                <img src={SoheeEmail} style={{height: 56}} />
            </div>
            <><br /><br />
                여기는 날씨가 오락가락 안해서 좋아 인종차별이 좀 있긴 하지만 ㅋㅋㅋㅋ 진짜 너무 반갑다! 나는 뉴욕대 미대 다니고 있구 나도 취업하려고 인터뷰 보러 다니고 있어. 문화콘텐츠라니 역시 그런 쪽으로 갔구나 옛날부터 뭐 보는 거 엄청 좋아하고 혼자 글쓰는 거 봤을 때부터 그럴 거라고 생각했어 중학교 친구들 중에는 연락하는 애들 있어??
                <br /><br /><br /><br />
            </>

            <div className="mail-contents-header">
                <img src={YoonhaEmail} style={{height: 56}} />
            </div>
            <><br /><br />
                처음엔 좀 어려웠는데 영어 배우니까 좀 낫더라 안그래도 사람들이랑 어울리는 거 좋아해서 친구는 금방 금방 생겼어 걔네랑 아직 연락하는구나! 이름들 너무 반갑다 ㅋㅋㅋ DDD한테도 안부 전해줘ㅠㅠ 한국 들어갈 일 있으면 꼭 만나고 싶다ㅜㅜ
                <br /><br /><br /><br />
            </>

            <div className="mail-contents-header">
                <img src={SoheeEmail} style={{height: 56}} />
            </div>
            <><br /><br />
                그러게 얼굴도 까먹겠어 진짜로 ㅋㅋㅋㅋㅋ한국 오면 이 이메일 주소나 010X9X8X2X4로 연락해 꼭 한번 만나자~ 그러면 지금은 열심히 인터뷰 준비중이겠군..! 어느 분야로 취업 준비하는지 물어봐도 돼? 미술도 분야가 다양해서 궁금해 ㅋㅋㅋㅋ너 그림 진짜 잘그렸었잖아
                <br /><br /><br /><br />
            </>

            <div className="mail-contents-header">
                <img src={YoonhaEmail} style={{height: 56}} />
            </div>
            <><br /><br />
                ㅋㅋㅋㅋㅋㅋㅋ나는 캐릭터 디자인 위주로 지원하고 있어 잘 그렸던 걸로 기억해준다니 다행이다... 번호 바로 저장했어 한국 가면 진짜 꼭꼭 연락할게 그땐 코로나도 끝나있을 테니까 꼭 만나는 거야!
                <br /><br /><br /><br />
            </>

            <div className="mail-contents-header">
                <img src={SoheeEmail} style={{height: 56}} />
            </div>
            <><br /><br />
                오 캐릭터 디자인 너무 멋지다~~ㅜㅜ 그럼 그럼 일정 취소해서라도 만나야지 건강 잘 챙기고 화이팅이야!!!
                <br /><br /><br /><br />
            </>

            <div className="mail-contents-header">
                <img src={YoonhaEmail} style={{height: 56}} />
            </div>
            <><br /><br />
                소희 너도!!!!!!
                <br /><br /><br /><br />
            </>
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
                   onClick={()=>{
                       setShowMailNum(item.show)
                    }}
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

      console.log(nowItem)

      return (
        <div className="mail-cotents-container">
            <img className="click" src={IconBack} onClick={() => setShowMailNum(-1)} />
            {showMailNum === 0 &&
            <div className="mail-contents-title">{nowItem.title}</div>
            }
            {showMailNum === 2 &&
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
                { showMailNum === 2 &&
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
