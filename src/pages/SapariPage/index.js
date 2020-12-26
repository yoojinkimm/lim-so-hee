
import React, { useState, useEffect, useContext } from 'react';
import '../../App.css';
import { useHistory } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import './sapari.css';

import { Dock } from '../../components';

// import Clock from 'react-live-clock';
import { UserContext } from '../../providers/UserProvider';

/* absolute */
import SapariFooter from '../../data/images/google-bottom.svg';
import GoogleAddress from '../../data/images/google_address.svg';
import IconRed from '../../data/icons/btn_red.svg';
import IconYellow from '../../data/icons/btn_yellow.svg';
import IconGreen from '../../data/icons/btn_green.svg';

/* profile */
import TextGmail from '../../data/images/google_text_gmail.svg';
import TextImage from '../../data/images/google_text_image.svg';
import IconMenu from '../../data/images/google_menu icon.svg';
import IconAccount from '../../data/images/google_account_icon.svg';

/* contents */
import GoogleLogo from '../../data/icons/google_logo.svg';
import GoogleSearchBar from '../../data/images/google_search bar.svg';
import SearchHistory from '../../data/images/search_history.svg';
import Tag1 from '../../data/images/google_tag1.svg';
import Tag2 from '../../data/images/google_tag2.svg';
import IconTime from '../../data/icons/time.svg';
import TextDelete from '../../data/images/삭제.svg';


const SapariPage = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const [showSearch, setShowSearch] = useState(false);
  const [update, setUpdate] = useState(false);

  const [historyList, setHistoryList] = useState([
      "학자금 대출",
      "국가장학금",
      "생활비 장학금",
      "대학생 생활비 지원",
      "면접 준비",
  ])

  const handleSearch = () => {
      setShowSearch(!showSearch);
  }


  const deleteList = (index) => {
    var list = historyList
    list.splice(index, 1);
    setHistoryList(list);
    setUpdate(!update);
    console.log(list);
  }
  

  return (
    <div className="sapari-background">
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

            <img className="sapari-address" src={GoogleAddress} />
        </div>


        <div className="sapari-contents">
            <div className="sapari-floating">
                <img className="google-gmail profile-logo click" src={TextGmail} onClick={() => history.push('/sapari/gmail')} />
                <img className="google-image profile-logo" src={TextImage} />
                <img className="google-menu profile-logo" src={IconMenu} />
                <img className="google-account profile-logo" src={IconAccount} />
            </div>

            <img className="google-logo" src={GoogleLogo} />
            <img className="google-search-bar click" src={GoogleSearchBar} onClick={handleSearch} />
            { showSearch  &&
                <div className="search-history">
                    {historyList.map((item, index) => {
                        return(
                            <div className="history-item">
                                <div style={{display: 'flex', flexDirection: 'row'}}>
                                    <img src={IconTime} />
                                    <div className="history-text">{item}</div>
                                </div>
                                <div className="delete-text click" onClick={() => deleteList(index)}>삭제</div>
                            </div>
                        )
                    })}
                </div>
            }

            <div className="tag-container">
                <img className="google-tag" src={Tag1} />
                <img className="google-tag" src={Tag2} />
            </div>
        </div>

        <img className="footer image" src={SapariFooter} />

        <Dock now='sapari' />
    </div>
  );
}

export default SapariPage;
