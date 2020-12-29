
import React, { useState, useEffect, useContext } from 'react';
import '../../App.css';
import { useHistory } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import './calendar.css';

import { Dock } from '../../components';

// import Clock from 'react-live-clock';
import { UserContext } from '../../providers/UserProvider';

/* absolute */
import IconRed from '../../data/icons/btn_red.svg';
import IconYellow from '../../data/icons/btn_yellow.svg';
import IconGreen from '../../data/icons/btn_green.svg';


import { Carousel } from 'react-bootstrap';

import Dec from '../../data/images/마야 작업화면_full screen.png';




const CalendarPage = ({num}) => {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const [showIntro, setShowIntro] = useState(true);

  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
      setCarouselIndex(selectedIndex)
  }


  useEffect(() => {
    setTimeout(() => {
        setShowIntro(false);
    }, 5000)
  }, [])


  return (
    <div className="calendar-background">
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
            <div className="calendar-header-text">
                Calendar
            </div>
        </div>

        <div className="calendar-container">
            <Carousel 
                activeIndex={carouselIndex}
                onSelect={handleSelect}
                indicators={false}
                interval={10000000}
                style={{width: '100%', height: '100%'}}
            >
                <Carousel.Item>
                </Carousel.Item>
            </Carousel>
        </div>

        
        {/* <Dock now='calendar' /> */}
    </div>
  );
}

export default CalendarPage;
