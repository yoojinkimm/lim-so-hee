
import React, { useState, useEffect, useContext } from 'react';
import '../../App.css';
import { useHistory, useLocation } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import './ending.css';

import { Dock } from '../../components';

// import Clock from 'react-live-clock';
import { UserContext } from '../../providers/UserProvider';

import Ending1_1 from '../../data/images/엔딩1-1.svg';
import Ending1_2 from '../../data/images/엔딩1-2.svg';
import Ending1_3 from '../../data/images/엔딩1-3.svg';

import Ending2_1 from '../../data/images/엔딩2-1.svg';
import Ending2_2 from '../../data/images/엔딩2-2.svg';
import Ending2_3 from '../../data/images/엔딩2-3.svg';
import Ending2_4 from '../../data/images/엔딩2-4.svg';
import Ending2_5 from '../../data/images/엔딩2-5.svg';

import Ending3_1 from '../../data/images/엔딩3-1.svg';
import Ending3_2 from '../../data/images/엔딩3-2.svg';
import Ending3_3 from '../../data/images/엔딩3-3.svg';
import Ending3_4 from '../../data/images/엔딩3-4.svg';

import Ending_1 from '../../data/images/엔딩공통1.svg';
import Ending_2 from '../../data/images/엔딩공통2.svg';

const Ending_first = [
    Ending1_1,
    Ending1_2,
    Ending1_3,
    Ending_1,
    Ending_2,
];

const Ending_second = [
    Ending2_1,
    Ending2_2,
    Ending2_3,
    Ending2_4,
    Ending2_5,
    Ending_1,
    Ending_2,
]

const Ending_third = [
    Ending3_1,
    Ending3_2,
    Ending3_3,
    Ending3_4,
    Ending_1,
    Ending_2,
]


const EndingPage = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const location = useLocation();
  const [showEnding, setShowEnding] = useState([]);

  const [showIndex, setShowIndex] = useState(0);

  const handleNext = () => {
    if (showIndex === showEnding.length - 1) history.push('/start');
    else setShowIndex(showIndex + 1);
  }

    useEffect(() => {
      if (location.state !== undefined){
          if (location.state.answer === '할머니집') setShowEnding(Ending_third)
          else if (location.state.answer === '오이도') setShowEnding(Ending_second)
          else if (location.state.answer === '캠핑장') setShowEnding(Ending_first)
      }
      else {
          
      }
  }, [location])


  return (
    <div className="ending-background">
        <img 
        className="ending-image"
        onClick={() => handleNext()}
        src={showEnding[showIndex]} />
    </div>
  );
}

export default EndingPage;
