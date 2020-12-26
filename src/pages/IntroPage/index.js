
import React, { useContext, useEffect, useState } from 'react';
import '../../App.css';
import { useHistory } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';

import PhoneCall from '../../data/images/phone_call.png';
import PhoneRing from '../../data/images/phone_ring.png';

import './intro.css';
import { UserContext } from '../../providers/UserProvider';


const IntroPage = () => {
  const { setUser } = useContext(UserContext);
  const [storyStep, SetStoryStep] = useState(0);
  const [name, setName] = useState(null);
  const history = useHistory();


  const text = [
    {   
        police: '',
        me: '여보세요?'
    },
    {
        police: '여보세요, 임소희씨 지인분 되시나요?',
        me: '네, 소희 친구인데요, 무슨 일이세요?'
    },
    {
        police: '경기도 일산동부경찰서 최우리 형사입니다.',
        me: '경찰서요? 무슨 일이세요?'
    },
    {
        police: '지금 임소희씨가 실종신고 되셨는데',
        police_2: '가장 마지막으로 통화한 분이셔서 연락드렸습니다.',
        me: '실종이요? 소희가 실종됐어요?',
    },
    {
        police: '정황으로 보면 자의로 어딘가 가신 것 같은데,',
        police_2: '일단 행방을 알아보고 있습니다.',
        police_3: '친구분 성함이 어떻게 되시죠?',
        me: ''
    },
    {
        police: `네, ${name}씨 ...`,
        police_2: '어제는 무슨 일로 만나셨나요?',
        me: '저희가 중학교 동창인데',
        me_2: '오랜만에 만나서 밥먹고 금방 헤어졌어요.'
    },
    {
        police: '중학교 때부터 친구시면',
        police_2: '소희씨를 잘 아시겠네요.',
        me: '요즘은 일 년에 한 두 번씩밖에 못 봐서요...'
    },
    {
        police:  '소희씨가 다른 건 다 들고 가셨는데',
        police_2: '노트북을 두고 가셨어요.',
        police_3: '혹시 봐주실 수 있나요?',
        me: '노트북을요?'
    },
    {
        police: '단서가 될 만한 건 다 봐야 해서요.',
        police_2: '생판 남보다는 친구가 나을 것 같아요.',
        police_3: '소희씨 행방에 도움을 줄 수 있는 정보가 있나',
        police_4: '봐주시면 감사하겠습니다.',
        me: ''
    }
]

  const handleName = (num) => {
      if(name !== null) {
          SetStoryStep(num)
      }
  }

  const handleNext = () => {
    history.push('/start')
  }

  useEffect(() => {
      if (storyStep === 6) {
          setUser({name: name})
      }
  }, [storyStep])

  

  return (
    <div className="intro-background">
        {storyStep === 0 &&
        <img className="intro-phone ring" 
        onClick={() => SetStoryStep(1)}
        src={PhoneRing} />
        }
        {storyStep >= 1 &&
        <Row style={{display: 'flex', alignItems: 'center', width: '100%'}}>
            <Col xl={7} md={7} sm={7}>
                {storyStep === 1 &&
                <div className="intro-mytext typing" 
                onClick={() => SetStoryStep(2)}>
                    <>여보세요? </>
                </div>
                }
                {storyStep === 2 &&
                <>
                    <div className="intro-policetext typing">
                        <>여보세요, 임소희씨 지인분 되시나요? </>
                    </div>
                    <div className="intro-mytext typing" 
                    onClick={() => SetStoryStep(3)}>
                        <>네, 소희 친구인데요, 무슨 일이세요? </>
                    </div>
                </>
                }
                {storyStep === 3 &&
                <>
                    <div className="intro-policetext typing">
                        <>경기도 일산동부경찰서 최우리 형사입니다. </>
                    </div>
                    <div className="intro-mytext typing" 
                    onClick={() => SetStoryStep(4)}>
                        <>경찰서요? 무슨 일이세요? </>
                    </div>
                </>
                }
                {storyStep === 4 &&
                <>
                    <div className="intro-policetext typing">
                        <>지금 임소희씨가 실종신고 되셨는데<br />
                        가장 마지막으로 통화한 분이셔서 연락드렸습니다. </>
                    </div>
                    <div className="intro-mytext typing" 
                    onClick={() => SetStoryStep(5)}>
                        <>실종이요? 소희가 실종됐어요? </>
                    </div>
                </>
                }
                {storyStep === 5 &&
                <>
                    <div className="intro-policetext typing">
                        <>정황으로 보면 자의로 어딘가 가신 것 같은데,<br />
                        일단 행방을 알아보고 있습니다.<br />
                        친구분 성함이 어떻게 되시죠? </>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
                        <input className="intro-name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="본인의 이름을 입력하세요." />
                        <Button variant="light" onClick={() => handleName(6)}>확인</Button>
                    </div>
                </>
                }
                {storyStep === 6 &&
                <>
                    <div className="intro-policetext typing">
                        <>네, {name}씨 ...<br />
                        어제는 무슨 일로 만나셨나요? </>
                    </div>
                    <div className="intro-mytext typing" 
                    onClick={() => SetStoryStep(7)}>
                        <>저희가 중학교 동창인데<br />
                        오랜만에 만나서 밥먹고 금방 헤어졌어요. </>
                    </div>
                </>
                }
                {storyStep === 7 &&
                <>
                    <div className="intro-policetext typing">
                        <>중학교 때부터 친구시면<br />
                        소희씨를 잘 아시겠네요. </>
                    </div>
                    <div className="intro-mytext typing" 
                    onClick={() => SetStoryStep(8)}>
                        <>요즘은 일 년에 한 두 번씩밖에 못 봐서요... </>
                    </div>
                </>
                }
                {storyStep === 8 &&
                <>
                    <div className="intro-policetext typing">
                        <>소희씨가 다른 건 다 들고 가셨는데<br />
                        노트북을 두고 가셨어요.<br />
                        혹시 봐주실 수 있나요? </>
                    </div>
                    <div className="intro-mytext typing" 
                    onClick={() => SetStoryStep(9)}>
                        <>노트북을요?</>
                    </div>
                </>
                }
                {storyStep === 9 &&
                <>
                    <div className="intro-policetext typing">
                        <>단서가 될 만한 건 다 봐야 해서요.<br />
                        생판 남보다는 친구가 나을 것 같아요.<br />
                        소희씨 행방에 도움을 줄 수 있는 정보가 있나<br />
                        봐주시면 감사하겠습니다. </>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                         <Button variant="light" onClick={() => handleNext()}>보러가기</Button>
                    </div>
                </>
                }
            </Col>
            <Col xl={5} md={5} sm={5}>
                <img className="intro-phone" src={PhoneCall} />
            </Col>
        </Row>
        }
    </div>
  );
}

export default IntroPage;