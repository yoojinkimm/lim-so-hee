
import React, { useState, useEffect, useContext } from 'react';
import '../../App.css';
import { useHistory, useLocation } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import './ppt.css';

import { Dock } from '../../components';

// import Clock from 'react-live-clock';
import { UserContext } from '../../providers/UserProvider';

/* absolute */
import IconRed from '../../data/icons/btn_red.svg';
import IconYellow from '../../data/icons/btn_yellow.svg';
import IconGreen from '../../data/icons/btn_green.svg';

import * as data from '../../data/text/ppt';



const PptPage = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const location = useLocation();
  const [item, setItem] = useState( {
        location: '',
        title: '',
        url: [],
    },);
  const [listIndex, setListIndex] = useState(0);

  useEffect(() => {
      if (location.state !== undefined){
          if (location.state.title === "공모전 최종") setItem(data.text[0])
          else if (location.state.title === "아이디어 공모전 최종") setItem(data.text[1])
          else if (location.state.title === "마케팅 대외활동") setItem(data.text[2])
          else if (location.state.title === "웹디 과제") setItem(data.text[3])
          else if (location.state.title === "인창 과제") setItem(data.text[4])
          else if (location.state.title === "종세문 과제") setItem(data.text[5])
          else if (location.state.title === "부귀영화 발제") setItem(data.text[6])
      }
      else {
          setItem(data.text[0])
      }
  }, [location])


  return (
    <div className="ppt-background">
        {/* <div className="desktop-top-floating">
            <div className='header-text'>Dec 31</div>
            <div className='header-text'><Clock format={'HH:mm A'} ticking={true} /></div>
        </div> */}
        <div className="header-back" style={{backgroundColor: "#ba4c21"}}>
            <div className="window-btn-container">
                <img className="window-btn click" src={IconRed} onClick={() => history.goBack()} />
                <img className="window-btn click" src={IconYellow} onClick={() => history.goBack()} />
                <img className="window-btn click" src={IconGreen} />
            </div>
            <div className="ppt-header-text">{item.location}{item.title}.pptx</div>
        </div>

        <div className="ppt-container">
            {item.url.length == 1
            ? <img className="ppt-image" src={item.url[0]} />
            :
            <div className="ppt-row">
                <div className="ppt-left">
                    {item.url.map((v, index) => {
                        return <img className="ppt-preview-image click" onClick={() => setListIndex(index)} src={v} />
                    })}
                </div>
                <div className="ppt-right">
                    <img src={item.url[listIndex]} />
                </div>
            </div>
            }
        </div>
        {/* <Dock now='ppt' /> */}
    </div>
  );
}

export default PptPage;
