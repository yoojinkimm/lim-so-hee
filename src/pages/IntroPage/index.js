
import React, { useContext, useEffect, useState } from 'react';
import '../../App.css';
import { useHistory } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';

import PhoneCall from '../../data/images/phone_call.png';
import PhoneRing from '../../data/images/phone_ring.png';

import './intro.css';
import { UserContext } from '../../providers/UserProvider';

import Typing from 'react-typing-animation';

import BellRingSound from '../../data/audio/아이폰 벨소리.mp3';
import ReactAudioPlayer from 'react-audio-player';


const IntroPage = () => {
  const { setUser } = useContext(UserContext);
  const [storyStep, SetStoryStep] = useState(0);
  const [name, setName] = useState(null);
  const history = useHistory();

  const [showPoliceText, setShowPoliceText] = useState(null);
  const [showMeText, setShowMeText] = useState(null);

  const [update, setUpdate] = useState(false);

//   var audioFile = new Audio(BellRingSound);
//   audioFile.pause();
//   audioFile.currentTime = 0;
//   audioFile.volume = 1;


  const intro_text = [
    {   
        step: 1,
        police: [' '],
        me: ['여보세요? ▼']
    },
    {
        step: 2,
        police: ['여보세요, 임소희씨 지인분 되시나요?'],
        me: ['네, 소희 친구인데요, 무슨 일이세요? ▼']
    },
    {
        step: 3,
        police: ['경기도 일산동부경찰서 최우리 형사입니다.'],
        me: ['경찰서요? 무슨 일이세요? ▼']
    },
    {
        step: 4,
        police: [
            '지금 임소희씨가 실종신고 되셨는데',
            '가장 마지막으로 통화한 분이셔서 연락드렸습니다.'
        ],
        me: ['실종이요? 소희가 실종됐어요? ▼']
    },
    {
        step: 5,
        police: [
            '정황으로 보면 자의로 어딘가 가신 것 같은데,',
            '일단 행방을 알아보고 있습니다.',
            '친구분 성함이 어떻게 되시죠?'
        ],
        me: [' ']
    },
    {
        step: 6,
        police: [
            `네, ${name}씨 ...`,
            '어제는 무슨 일로 만나셨나요?'
        ],
        me: [
            '저희가 중학교 동창인데',
            '오랜만에 만나서 밥먹고 금방 헤어졌어요. ▼'
        ]
    },
    {
        step: 7,
        police: [
            '중학교 때부터 친구시면',
            '소희씨를 잘 아시겠네요.'
        ],
        me: ['요즘은 일 년에 한 두 번씩밖에 못 봐서요... ▼']
    },
    {

        step: 8,
        police:  [
            '소희씨가 다른 건 다 들고 가셨는데',
            '노트북을 두고 가셨어요.',
            '혹시 봐주실 수 있나요?'
        ],
        me: ['노트북을요? ▼']
    },
    {
        step: 9,
        police:  [ 
            '단서가 될 만한 건 다 봐야 해서요.',
            '생판 남보다는 친구가 나을 것 같아요.',
            '소희씨 행방에 도움을 줄 수 있는 정보가 있나',
            '봐주시면 감사하겠습니다.'
        ],
        me: [' ']
    }
]

  const handleName = (num, input) => {
      if(input !== null) {
          SetStoryStep(num)
          setName(input)
      }
  }

  const handleNext = () => {
    history.push('/intro')
  }

  useEffect(() => {
    //   if(storyStep === 0){
    //     setTimeout(() => {
    //         audioFile.play();
    //     }, 3000);
    //   }
      if (storyStep === 6) {
          setUser({name: name})
      }
  }, [storyStep]);



  const ShowText = ({num}) => {
    const pt = intro_text[num-1].police;
    const mt = intro_text[num-1].me;

    const [startMe, setStartMe] = useState(false);

    var input;

    return(
        <>
             <div className="intro-policetext typing">
                <Typing hideCursor onFinishedTyping={() => setStartMe(true)}>
                    <>
                    {pt.map((item, index) => {
                        return (
                            <>{item} <br /> </>
                        )
                    })}
                    </>
                </Typing>
            </div>
            <div>
                { startMe &&
                <>
                    {/* 이름을 입력받는 경우 */}
                    {storyStep === 5 
                        &&
                        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
                            <input className="intro-name" 
                            value={input}
                            onChange={(e) => input = e.target.value}
                            onKeyPress={(e) => {if(e.key ==='Enter') handleName(6, input)}}
                            placeholder="본인의 이름을 입력하세요." />
                            <Button variant="light" onClick={() => handleName(6, input)}>확인</Button>
                        </div>
                    }
                        
                        {/* 마지막인 경우 */}
                        {storyStep === 9 
                            &&
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <Button variant="light" onClick={() => handleNext()}>보러가기</Button>
                            </div>
                        }

                        {/* 대사만 보여주는 경우들 */}
                        {storyStep !== 5 && storyStep !== 9 &&
                            <div className="intro-mytext typing" 
                            onClick={() => SetStoryStep(num+1)}>
                            <Typing hideCursor>
                            <>
                                {mt.map((item, index) => {
                                    return (
                                        <>{item} <br /> </>
                                    )
                                })}
                            </>
                            </Typing>
                            </div>
                        }
                </>
                }
            </div>
        </>
    )
  }

  

  return (
    <div className="intro-background">
        {storyStep === 0 &&
        <div style={{display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center'}}>
            <img className="intro-phone ring" 
            onClick={() => {
                SetStoryStep(1);
                // audioFile.pause();
            }}
            src={PhoneRing} />
            {/* <ReactAudioPlayer
            src={BellRingSound}
            autoPlay
            /> */}
            <Row style={{display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center'}}>
                <div 
                  className="click"
                  onClick={() => history.push('/intro')}
                  style={{color: 'white', fontSize: 30}}>
                    >>skip
                </div>
            </Row>
        </div>
        }
        {storyStep >= 1 &&
        <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
            <Row style={{display: 'flex', alignItems: 'center', width: '100%'}}>
                <Col xl={7} md={7} sm={7}>
                    <ShowText num={storyStep} />
                </Col>
                <Col xl={5} md={5} sm={5}>
                    <img className="intro-phone" src={PhoneCall} />
                </Col>
            </Row>
        </div>
        }
    </div>
  );
}

export default IntroPage;
