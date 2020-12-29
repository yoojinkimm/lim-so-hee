import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './taxi-pop.css';


import IconRed from '../../data/icons/btn_red.svg';
import IconYellow from '../../data/icons/btn_yellow.svg';
import IconGreen from '../../data/icons/btn_green.svg';

import TaxiIcon from '../../data/icons/카카오택시 아이콘.svg';

import { Button, Row, Col } from 'react-bootstrap';


const answers = [
    {
        name : '할머니집',
        address: '전라남도 목포시 외달도길 42'
    },
    {
        name : '오이도',
        address: '경기도 시흥시 정왕동 오이도'
    },
    {
        name : '캠핑장',
        address: '경기도 연천군 미산면 백석리 산 68-1'
    },
]



const TaxiPopup = ({show, setShow}) => {
    // 랜덤 위치를 위함
    const [num, setNum] = useState(0);

    // 인트로를 잠깐 보여주기 위함
    const [showLogo, setShowLogo] = useState(true);

    const history = useHistory();

    const [answerInput, setAnswerInput] = useState('');

    // 맞은 답의 이름
    const [rightAnswer, setRightAnswer] = useState(-1);

    const [showResult, setShowResult] = useState(null);

    // 이용자 현재 위치
    const [location, setLocation] = useState(null);
    

    useEffect(() => {
        var max = 300;
        var min = 100;
        var random = Math.random() * (max - min) + min ;
        setNum(random);

        setTimeout(() => {
            setShowLogo(false);
        }, 3500)

        
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation([position.coords.latitude, position.coords.longitude]);
                console.log(position.coords.latitude);
            });
    }, [])


    var z = 3;

    const handleNext = (e) => {
      if(e.key === "Enter")  {
          checkAnswer();
      }
    }

    const checkAnswer = () => {
        var did = false;
        answers.map((item,index) => {
            if (answerInput === item.address) {
                setRightAnswer(item.name);

                did = true;
            }
            else if (answerInput !== item.address && !did) {
                setRightAnswer('wrong');
            }
        })
    }

    useEffect(() => {
        console.log(rightAnswer)
        if (rightAnswer === '할머니집') {
            setShowResult(<>
                <div className="wrong-again" onClick={() => setRightAnswer(-1)}>다시</div>
                <div style={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column'}}>
                    <div className="loca-text">현위치: </div>
                    <div className="loca-text">목적지: {answers[0].address}</div>
                </div>
                <div className="right-text click"
                onClick={() => history.push({pathname: '/ending', state: {answer: answers[0].name}})}
                >출발합니다</div>
            </>)
        }
        else if (rightAnswer === '오이도') {
            setShowResult(<>
                <div className="wrong-again" onClick={() => setRightAnswer(-1)}>다시</div>
                <div style={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column'}}>
                    <div className="loca-text">현위치: </div>
                    <div className="loca-text">목적지: {answers[1].address}</div>
                </div>
                <div className="right-text click"
                onClick={() => history.push({pathname: '/ending', state: {answer: answers[1].name}})}
                >출발합니다</div>
            </>)
        }
        else if (rightAnswer === '캠핑장') {
            setShowResult(<>
                <div className="wrong-again" onClick={() => setRightAnswer(-1)}>다시</div>
                <div style={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column'}}>
                    <div className="loca-text">현위치: </div>
                    <div className="loca-text">목적지: {answers[2].address}</div>
                </div>
                <div className="right-text click"
                onClick={() => history.push({pathname: '/ending', state: {answer: answers[2].name}})}
                >출발합니다</div>
            </>)
        }
    }, [rightAnswer])


    return(
    <>
    {show &&
        <div className='taxi-popup'
        onClick={() => z = z+1}
        style={{top: 30, left: 150 + num, zIndex: z}}>
            <div className="header-back">
                <div className="window-btn-container">
                    <img className="window-btn click" src={IconRed} onClick={() => setShow(false)} />
                    <img className="window-btn click" src={IconYellow} onClick={() => setShow(false)} />
                    <img className="window-btn click" src={IconGreen} />
                </div>
                <div className='taxi-title-text'>카카오택시 출발하기</div>
            </div>
            <div className="taxi-back" style={{backgroundColor: rightAnswer === -1 ? '#282d4b' : 'white'}}>
                {showLogo 
                ? /* 인트로 */
                <img src={TaxiIcon} />
                : /* 답을 입력받는 화면 */
                <>
                { rightAnswer === -1 
                ?
                <>
                <div className="taxi-title">목적지를<br/>입력하세요</div>
                    <input className="taxi-input"
                    placeholder="정확하게 입력 후 Enter"
                    onKeyPress={handleNext}
                    value={answerInput} onChange={(e) => setAnswerInput(e.target.value)} />
                </>
                : /* 틀린 답을 입력했을 경우 */
                <>
                    { rightAnswer === 'wrong'
                    ?
                    <>
                    <div className="wrong-again" onClick={() => setRightAnswer(-1)}>다시</div>
                    <div className="wrong-text">정보가<br/>없습니다</div>
                    </>
                    : /* 맞는 답을 입력했을 경우 */
                    <>
                        {showResult !== null &&
                            showResult
                        }
                    </>
                    }
                </>
                }
                </>
                }

            </div>
        </div>
    }
    </>
    )
}

export default TaxiPopup;