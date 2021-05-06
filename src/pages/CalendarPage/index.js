
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

import Oct from '../../data/images/캘린더_no header_10월.svg';
import Nov from '../../data/images/캘린더_11월_v2.svg';
import Dec from '../../data/images/캘린더_12월_v2.svg';



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
                nextIcon={<span aria-hidden="true" className="carousel-control-icon">다음</span>}
                prevIcon={<span aria-hidden="true" className="carousel-control-icon">이전</span>}
                onSelect={handleSelect}
                indicators={false}
                interval={10000000}
                style={{width: '100%', height: '100%'}}
            >
                <Carousel.Item>
                    <img className="calendar-image" src={Oct} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="calendar-image" src={Nov} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="calendar-image" src={Dec} />
                </Carousel.Item>
            </Carousel>
        </div>

        
        {/* <Dock now='calendar' /> */}
    </div>
  );
}

export default CalendarPage;
