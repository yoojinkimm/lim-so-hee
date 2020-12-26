
import React, { useState, useEffect, useContext } from 'react';
import '../../App.css';
import { useHistory } from 'react-router-dom';
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


const text = {
    title: <>자기소개서 초본</>,
    contents: <>나는 마케팅이 하고싶다. 왜냐하면 마케팅 장인이기 때문이다. 나는 마케팅을 아주 잘한다. 특히 컨텐츠 마케팅의 천재다. 특히 컨텐츠 마케팅의 천재다. 특히 컨텐츠 마케팅의 천재다. 특히 컨텐츠 마케팅의 천재다.</>
}



const WordPage = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);


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
            <div className="word-header-text">{text.title}</div>
        </div>

        <div className="word-container">
            <div className="word-header">
                <img src={WordMenu} style={{width: '100%'}} />
            </div>

            <div className="word-contents">
                <div className="word-paper">
                    {text.title} <br /> <br /> <br />
                    {text.contents}
                </div>
            </div>

        </div>

        <img className="word-footer" style={{width: '100%'}}  src={WordFooter} />
        <Dock now='word' />
    </div>
  );
}

export default WordPage;
