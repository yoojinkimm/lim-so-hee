
import React, { useState, useEffect, useContext } from 'react';
import '../../App.css';
import { useHistory } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import './photo.css';

import { Dock } from '../../components';

// import Clock from 'react-live-clock';
import { UserContext } from '../../providers/UserProvider';

/* absolute */
import IconRed from '../../data/icons/btn_red.svg';
import IconYellow from '../../data/icons/btn_yellow.svg';
import IconGreen from '../../data/icons/btn_green.svg';

import * as data from '../../data/text/image';



const PhotoPage = ({title}) => {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const [nowItem, setNowItem] = useState({ title: '', url: '' });

  useEffect(() => {
      if (title !== undefined) {
          if (title === '할머니집') setNowItem(data.image_contents[0])
      }
  }, [])



  return (
    <div className="photo-background">
        {/* <div className="desktop-top-floating">
            <div className='header-text'>Dec 31</div>
            <div className='header-text'><Clock format={'HH:mm A'} ticking={true} /></div>
        </div> */}
        <div className="header-back" style={{backgroundColor: "#e9e9e9"}}>
            <div className="window-btn-container">
                <img className="window-btn click" src={IconRed} onClick={() => history.goBack()} />
                <img className="window-btn click" src={IconYellow} onClick={() => history.goBack()} />
                <img className="window-btn click" src={IconGreen} />
            </div>
            <div className="photo-header-text">
                {nowItem.title}.jpeg
            </div>
        </div>

        <div className="photo-container">
            <img src={nowItem.url} />
        </div>

        
        <Dock now='photo' />
    </div>
  );
}

export default PhotoPage;
