
import React, { useState, useEffect, useContext } from 'react';
import '../../App.css';
import { useHistory } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import './memo.css';

import { Dock, PasswordInput } from '../../components';

// import Clock from 'react-live-clock';
import { UserContext } from '../../providers/UserProvider';

/* absolute */
import IconRed from '../../data/icons/btn_red.svg';
import IconYellow from '../../data/icons/btn_yellow.svg';
import IconGreen from '../../data/icons/btn_green.svg';


const diaryFolderNum = 1;
const diaryFolderPW = 'inside623';
const diaryPWhint = <>_OOOOOO, _OOO <br /> 두 개의 이름 뒤에 붙는 글자와 숫자들</>;

const folder1List = [
      {title: '오늘 할일', date: '2020.12.02', contents: <>오늘 할일 엄청 많다 <br /> 진짜 하기 싫다</>},
      {title: '오늘 할일', date: '2020.12.02', contents: <>오늘 할일 엄청 많다 <br /> 진짜 하기 싫다</>},
      {title: '오늘 할일', date: '2020.12.02', contents: <>오늘 할일 엄청 많다 <br /> 진짜 하기 싫다</>},
      {title: '오늘 할일', date: '2020.12.02', contents: <>오늘 할일 엄청 많다 <br /> 진짜 하기 싫다</>},
      {title: '오늘 할일', date: '2020.12.02', contents: <>오늘 할일 엄청 많다 <br /> 진짜 하기 싫다</>},
      {title: '오늘 할일', date: '2020.12.02', contents: <>오늘 할일 엄청 많다 <br /> 진짜 하기 싫다</>},
];

const folder2List = [
      {title: '학창시절 친구들', date: '2020.11.14', 
      contents: <>
        오늘 중학교 친구들을 만났다. <br />
        다들 바쁘다보니 거의 세 달 만에 만난 것 같다.<br />
        늘 그랬듯이 중학교 때 놀던 동네에서 단골이었던 떡볶이집에 갔다.<br />
        자주 안 봐서 더 그런 것 같은데, 만나면 자꾸 추억의 장소들만 가게 된다.<br />
        그리고 항상 같은 레퍼토리의 이야기들을 풀어놓다가 온다.<br />
        학창시절에 대한 얘기, 과거에 대한 얘기,<br />
        그리고 짤막하게 각자의 삶에 대한 브리핑.<br />
        언제부턴가 점점 이 친구들이 내 현재와 미래로부터 멀어지는 느낌이 든다.<br />
        서로의 너무도 다른 삶이 공감하기 어려워져서<br />
        자꾸 옛날 이야기에만 머무르려고 하는 건지도 모르겠다.<br />
        느껴진다. 우리의 공기가 달라지고 있음을.<br />
        <br />
        변한다는 게 어찌보면 당연한 일인데, 왜 이렇게 슬플까.<br />

      </>},
      {title: '자소서 힘듦', date: '2020.11.30', 
      contents: <>
        자소서를 쓰다가 노트북을 덮어버렸다. 다음주까지 제출인데.. <br />
        어디서까지가 내 진짜 생각이고 어디까지가 짜낸 건지 이제는 구분할 수도 없게 뒤섞여버렸다. <br />
        이게 진짜 내 모습의 일부라고 할 수 있을까? <br />
        그럼 어떤 게 내 모습인가? 친구들과 있을 때? 가족들과 있을 때? <br />
        진짜 내 모습이라는 건 누가 결정하는 걸까. 자소서를 쓰는 나도 나고 친구들과 놀러다니는 나도 나인데. 그런데도 자꾸 내가 아닌 누군가에 대해 설명하고 있는 것 같아서 괴롭다. <br />
        어렸을 때부터 난 거짓말을 잘 못했다. <br />
        자소서 쓰는 게 너무 힘들다.<br />
        앞으로 몇 줄의 거짓말을 더 보태야 할까. <br />
        없는 얘기는 아니라고 나를 위로하려 해도 <br />
        글 속의 내가 내가 아니라는 느낌은 지울 수가 없다.<br />
      </>},
      {title: '스터디원 취업 부러움', date: '2020.12.03', 
      contents: <>
        마케팅 스터디를 같이 하던 은하님이 cj에 취업했다. <br />
        축하한다고 이야기했지만 사실은 너무너무 부럽고 너무너무 슬펐다. <br />
        은하님은 특히 나랑 처지가 비슷해서 <br />
        스터디하면서 가장 많이 이야기하고 공감하고 서로 의지하던 사람이었다. <br />
        기뻐하고, 진심으로 축하해줘야 당연한 건데. 순수하게 기뻐하지 못하는 내가 너무 싫었다. <br />
        나한테는 분명히 떨어질 것 같다고 했는데. 힘들다, 어렵다는 말에 위로도 해줬는데. <br />
        이러면 안 되는데 은하님이 미웠다. <br />
        결국 진짜 힘들고 어려운 건 나 혼자뿐이었던 거야? <br />
        나는 겉으로는 모두 다같이 잘 되길 바랐으면서, 나보다 먼저 잘 되는 건 배 아파하는 애였다. <br />
        이런 속 좁은 내가 싫다.<br />

      </>},
      {title: '서포터즈 회식', date: '2020.12.23', 
      contents: <>
        오늘은 서포터즈 해단식이 있어서 간만에 외출을 했다. 끝나고 우리 팀 사람들이랑 회식도 했다. 마지막으로 모이는 거라 더 오래 이야기를 나눴다.<br />
        요즘은 사람들 만나서 웃고 떠들고 이야기하는 게 피곤하게 느껴진다. 사람들 만날 땐 재밌게 이야기를 잘 하는데, 집에 오면 기진맥진 해버리는 것 같다.<br />
        사람들 좋아하고, 이야기하는 거 좋아하는 분위기 메이커.<br />
        다른 사람들은 나에 대해서 이렇게 알고 있고, 나도 최근까지는 내가 이런 사람이라고 생각했다.<br />
        코로나 때문에 밖에 나가는 일을 줄이게 되고 나니 사람들 만나는 게 힘들게 느껴지는 것 같다. <br />
        사실 나는 애를 쓰고 있었던 걸지도 모르겠다.<br />
        <br />
        회식을 마치고 집에 오면서 카톡으로 앞으로 꼭 자주 모이자고 서로 이야기했다. 하지만 다시 이렇게 얼굴 보기는 어려울 거라는 걸 다들 어렴풋이 알고 있을 것이다. 다수의 인간관계가 그래왔듯이.<br />


      </>},
      {title: '오이도', date: '2020.12.03', 
      password: '한울자매',
      hint: '소중했던 우리들의 이름',
      contents: <>
        어느 순간부터 나는 나를 모르겠다.<br />
        상황마다 달라지는 내 스스로의 모습이 낯설게 느껴질 때가 많다.<br />
        그 모습들이 전부 다 내가 맞는 건지, 꾸며낸 것들이 진짜 나를 덮어버리고 있는 건지 모르겠다. 그래서 무서웠다.<br />
        <br />
        어떤 상황에서도 변하지 않고 남아있을 ‘나’라는 모습은 어떤 것일까? 그 모습을 나는 찾을 수 있을까? 지금은 어렵다.<br />
        <br />
        <br />
        모를 때는 처음으로 돌아가라는 말이 있다. 생각해보면 어릴 때는 스스로가 참 분명한 사람이라고 생각했다. 선명하게 꿈꾸던 것이 있었고, 나에 대해 너무나 분명하게 잘 알고 있다고 생각했었다. <br />
        <br />
        어쩌면 그 때의 나에게 답이 있지 않을까? <br />
        가장 조건없이, 맥락없이 그저 내 마음의 소리에만 귀기울였던. 지금 보기엔 허무맹랑한 꿈조차 경청해주었던 그 때의 나에게. <br />
        <br />
        그 때의 내가 꿈꾸던 마음, 순수했던 그 마음을 만나러 가고 싶다. <br />


      </>},
];



const MemoPage = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const [showFolder, setShowFolder] = useState(0);
  const [showMemo, setShowMemo] = useState(0);
  const [showList, setShowList] = useState(true);
  

  const [inputDiaryPW, setInputDiaryPW] = useState(null);
  const [showDiary, setShowDiary] = useState(false);

  const [inputMemoPW, setInputMemoPW] = useState(null);


  const showMemoList = () => {
      var list = []

      if(showFolder === 0) list = folder1List;
      if(showFolder === 1) list = folder2List;

      return(
          <>
           {list.map((item, index) => {
               return(
                   <div className="memo-item click"
                   onClick={() => setShowMemo(index)}
                   style={{backgroundColor: showMemo === index &&  'yellow'}}>
                       <div className="list-title">
                           {item.password !== undefined
                           ? '잠금'
                           : item.title}
                        </div>
                       <div>{item.date}</div>
                   </div>
               )
           })}
          </>
      )
  }

  const showMemoContent = () => {
      var list = []
      if(showFolder === 0) list = folder1List;
      if(showFolder === 1) list = folder2List;

      return(
          <div className="memo-text">
            { list[showMemo].password !== undefined 
            ?
            <>
            {inputMemoPW === list[showMemo].password
            ?
            <>
                <div className="date-container">{`${list[showMemo].date.slice(0,4)}년 ${list[showMemo].date.slice(5,7)}월 ${list[showMemo].date.slice(8,10)}일`}</div>
                <div className="memo-title">{list[showMemo].title}</div>
                {list[showMemo].contents}
            </>
            :
            <PasswordInput value={inputMemoPW} 
            onChange={(e) => setInputMemoPW(e.target.value)}
            answer={list[showMemo].password} hint={list[showMemo].hint} />
            }
            </>
            :
            <>
                <div className="date-container">{`${list[showMemo].date.slice(0,4)}년 ${list[showMemo].date.slice(5,7)}월 ${list[showMemo].date.slice(8,10)}일`}</div>
                <div className="memo-title">{list[showMemo].title}</div>
                {list[showMemo].contents}
            </>
            }
          </div>
      )
  }

  const changeFolder = (index) => {
      setShowFolder(index)
      setShowMemo(0)
  }

  return (
    <div className="memo-background">
        {/* <div className="desktop-top-floating">
            <div className='header-text'>Dec 31</div>
            <div className='header-text'><Clock format={'HH:mm A'} ticking={true} /></div>
        </div> */}
        <div className="header-back">
            <div className="window-btn-container">
                <img className="window-btn click" src={IconRed} onClick={() => history.goBack()} />
                <img className="window-btn click" src={IconYellow} onClick={() => history.goBack()} />
                <img className="window-btn click" src={IconGreen} />
            </div>
            <div style={{width: '100%', paddingLeft: 70}}>
                <div className="change-view-btn click" onClick={() => setShowList(!showList)} />
            </div>
        </div>


        <div className="memo-contents">
        <Row style={{width: '100%', height: '100%'}}>
            {/* folder */}
            <Col sm={2} md={2} lg={2} className="memo-menu">
                <div>ICloud</div>
                <div className="memo-menu-item click" 
                style={{backgroundColor: showFolder === 0 && 'blue',
                color: showFolder === 0 ? 'white' : 'rgba(150, 150, 150)'}}
                onClick={() => changeFolder(0)}>
                    <div>todo</div><div>{folder1List.length}</div>
                </div>
                <div className="memo-menu-item click" 
                style={{backgroundColor: showFolder === 1 && 'blue',
                color: showFolder === 1 ? 'white' : 'rgba(150, 150, 150)'}}
                onClick={() => changeFolder(1)}>
                    <div>일기</div><div>{folder2List.length}</div>
                </div>
            </Col>

            {showFolder === diaryFolderNum && showDiary === false
            ?
            <Col sm={10} md={10} lg={10}>
                <PasswordInput value={inputDiaryPW} setShow={setShowDiary}
                onChange={(e) => setInputDiaryPW(e.target.value)}
                answer={diaryFolderPW} hint={diaryPWhint} />
            </Col>

            :
            <>
                {showList 
                ?
                <>
                    <Col sm={3} md={3} lg={3}>
                        {showMemoList()}
                    </Col>
                    <Col sm={7} md={7} lg={7}>
                        {showMemoContent()}
                    </Col>
                </>
                :
                <Col sm={10} md={10} lg={10}>
                    {showMemoContent()}
                </Col>
                }
            </>
            }
        </Row>
            
        </div>

        <Dock now='memo' />
    </div>
  );
}

export default MemoPage;
