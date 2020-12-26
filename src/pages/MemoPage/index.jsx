
import React, { useState, useEffect, useContext } from 'react';
import '../../App.css';
import { useHistory } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import './memo.css';

import { Dock } from '../../components';

// import Clock from 'react-live-clock';
import { UserContext } from '../../providers/UserProvider';

/* absolute */
import IconRed from '../../data/icons/btn_red.svg';
import IconYellow from '../../data/icons/btn_yellow.svg';
import IconGreen from '../../data/icons/btn_green.svg';




const MemoPage = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const [showFolder, setShowFolder] = useState(0);
  const [showMemo, setShowMemo] = useState(0);

  const [showList, setShowList] = useState(true);

  const [folder1List, setFolder1List] = useState([
      {title: '오늘 할일', date: '2020.12.02', contents: <>오늘 할일 엄청 많다 <br /> 진짜 하기 싫다</>},
      {title: '오늘 할일', date: '2020.12.02', contents: <>오늘 할일 엄청 많다 <br /> 진짜 하기 싫다</>},
      {title: '오늘 할일', date: '2020.12.02', contents: <>오늘 할일 엄청 많다 <br /> 진짜 하기 싫다</>},
      {title: '오늘 할일', date: '2020.12.02', contents: <>오늘 할일 엄청 많다 <br /> 진짜 하기 싫다</>},
      {title: '오늘 할일', date: '2020.12.02', contents: <>오늘 할일 엄청 많다 <br /> 진짜 하기 싫다</>},
      {title: '오늘 할일', date: '2020.12.02', contents: <>오늘 할일 엄청 많다 <br /> 진짜 하기 싫다</>},
  ])

  const [folder2List, setFolder2List] = useState([
      {title: '오늘 할일', date: '2020.12.02', contents: <>오늘 할일 엄청 많다 <br /> 진짜 하기 싫다</>},
      {title: '오늘 할일', date: '2020.12.02', contents: <>오늘 할일 엄청 많다 <br /> 진짜 하기 싫다</>},
      {title: '오늘 할일', date: '2020.12.02', contents: <>오늘 할일 엄청 많다 <br /> 진짜 하기 싫다</>},
  ])

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
                       <div className="list-title">{item.title}</div>
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
            <div className="date-container">{`${list[showMemo].date.slice(0,4)}년 ${list[showMemo].date.slice(5,7)}월 ${list[showMemo].date.slice(8,10)}일`}</div>
            <div className="memo-title">{list[showMemo].title}</div>
            {list[showMemo].contents}
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
        </Row>
            
        </div>

        <Dock now='memo' />
    </div>
  );
}

export default MemoPage;
