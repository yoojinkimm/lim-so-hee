
import React, { useState } from 'react';
import '../../App.css';
import { useHistory } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import './start.css';

// import PWinput from '../../data/icons/password.svg';
import IconCancel from '../../data/icons/cancel icon.svg';
import Header from '../../data/icons/header.svg';

import Profile from '../../data/images/profile.png';
import ImageTutorial from '../../data/images/tutorial.svg';
import ImageAbout from '../../data/images/about.svg';

import Clock from 'react-live-clock';

const StartPage = () => {
  const history = useHistory();
  const [password, setPassword] = useState("")
  const [showTutorial, setShowTutorial] = useState(false);
  const [showCredit, setShowCredit] = useState(false);

  const handleNext = (e) => {
      if(e.key === "Enter")  history.push('/desktop')
  }

  const popTutorial = () => {
    setShowTutorial(true);
    setShowCredit(false);
  }

  const popCredit = () => {
    setShowTutorial(false);
    setShowCredit(true);
  }

  

  return (
    <div className="start-background">
        <div className="start-top-floating">
            <div className='header-text'>Dec 31</div>
            <div className='header-text'><Clock format={'HH:mm A'} ticking={true} /></div>
        </div>
        <img className="start-circle" src={Profile} />
        <div className="start-title">Sohee Lim</div>

        <div>
            <input 
            className="start-input"
            value={password}
            onKeyPress={handleNext}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="게임 시작 : Enter 입력"
            />
        </div>

        <div className="start-bottom-floating">
                <div className='cancel-text click' onClick={() => popTutorial()}>게임방법</div>
                <div className='cancel-text click' onClick={() => popCredit()}>About</div>
        </div>

    {showTutorial && 
    <div className="start-image start-tutorial">
      <div className="tutorial-title">게임 방법</div>
      <div>
        <br /><br />
        소희는 어디로 사라졌을까? <br />
        <br />
        노트북 속의 단서를 수집하여 소희가 사라진 장소를 추리하세요. <br />
        <br />
        바탕화면에 있는 카카오택시(T) 아이콘을 클릭하면 장소를 입력할 수 있습니다. <br />
        (구체적인 주소를 정확하게 입력해야 정답으로 인정됩니다.)<br />
        정답을 알맞게 입력하면 엔딩이 등장하며 게임이 종료됩니다. <br />
        <br />
        잠겨있는 단서의 암호는 한글, 숫자, 영어 모두 가능하며,<br />
        다른 단서로부터 암호를 유추해낼 수 있습니다.<br />
        <br />
        <div className="text-pink">
          * 인스타그램 단서는 기존에 계정 로그인이 되어있는 경우에 단서 확인이 가능합니다. <br />
          (본인이 사용하던 계정도 가능합니다.)<br />
          로그인이 되어있지 않은 경우, 다른 단서로부터 알아낸 소희의 비공개 계정으로 로그인하여 단서를 확인하시기 바랍니다.<br />
        </div>
        <br />
        다양한 형태의 단서가 숨어있습니다. 시간제한은 없으니 <br />
        노트북을 꼼꼼히 살피며 소희의 이야기에 귀 기울여 주시기 바랍니다. <br />
      </div>
      <div className="close-btn click" onClick={() => setShowTutorial(false)}>닫기</div>
    </div>
    }
    {showCredit && 
    <div className="start-image start-about" >
      <div className="tutorial-title">About</div>
      <div className="fbold fbig"><br /><br />임소희 @lsh_623</div>
      <br />
      '임소희 @lsh_623'은 소희의 행방을 찾기 위해 노트북을 살펴보며  <br />
      소희의 다양한 모습과 생각을 읽어나가는  <br />
      스토리텔링을 강조한 웹 추리게임입니다.
      <br />
      <br />
      <br />
      <div className="fbold">
      만든 사람들  <br /><br />
      Storyteller, Web Developer    김유진  <br /><br />
      Storyteller, Designer    김효진, 남로아  <br /><br />
      </div>
      <br />
      <div className="fsmall">
        Special Thanks to 김상용 교수님, Group B <br />
        Sogang University 2020-2 Visual Story <br />
        <br /> <br />
        <div className="text-pink">
          DM us on Instagram @lsh_623
        </div>
      </div>
      <div className="close-btn click" onClick={() => setShowCredit(false)}>닫기</div>
    </div>
    }
    </div>
  );
}

export default StartPage;
