
import React, { useState, useEffect, useContext } from 'react';
import '../../App.css';
import { useHistory, useLocation } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import './word.css';

import { Dock } from '../../components';

// import Clock from 'react-live-clock';
import { UserContext } from '../../providers/UserProvider';

/* absolute */
import IconRed from '../../data/icons/btn_red.svg';
import IconYellow from '../../data/icons/btn_yellow.svg';
import IconGreen from '../../data/icons/btn_green.svg';

import WordMenu from '../../data/images/word-menu.png';
import WordFooter from '../../data/images/word-footer.png';

import * as data from '../../data/text/word';




const WordPage = () => {
  const history = useHistory();
  const location = useLocation();
  const { user } = useContext(UserContext);
  const [item, setItem] = useState({
      title: '', contents: '',
  })

  useEffect(() => {
      if (location.state !== undefined){
          if (location.state.title === "자기소개서") setItem(data.text[0])
          if (location.state.title === "아이디어") setItem(data.text[1])
          if (location.state.title === "시나리오") setItem(data.text[2])
      }
      else {
          setItem(data.text[0])
      }
  }, [location])


  return (
    <div className="word-background">
        {/* <div className="desktop-top-floating">
            <div className='header-text'>Dec 31</div>
            <div className='header-text'><Clock format={'HH:mm A'} ticking={true} /></div>
        </div> */}
        <div className="header-back" style={{backgroundColor: "#5566aa"}}>
            <div className="window-btn-container">
                <img className="window-btn click" src={IconRed} onClick={() => history.goBack()} />
                <img className="window-btn click" src={IconYellow} onClick={() => history.goBack()} />
                <img className="window-btn click" src={IconGreen} />
            </div>
            <div className="word-header-text">{item.title}</div>
        </div>

        <div className="word-container">
            <div className="word-header">
                <img src={WordMenu} style={{width: '100%'}} />
            </div>

            <div className="word-contents">
                <div className="word-paper">
                    <br /> <br />
                    {item.contents}
                </div>
                {item.contents_2 !== undefined &&
                    <div className="word-paper">
                        <br /> <br />
                        {item.contents_2}
                    </div>
                }
            </div>

        </div>

        <img className="word-footer" style={{width: '100%'}}  src={WordFooter} />
        {/* <Dock now='word' /> */}
    </div>
  );
}

export default WordPage;
