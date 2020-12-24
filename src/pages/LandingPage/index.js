
import React, {useState} from 'react';
import '../../App.css';
import { useHistory } from 'react-router-dom';

import './landing.css';
import { Button } from 'react-bootstrap';

const LandingPage = () => {
  const history = useHistory();

  const handleNext = () => {
      history.push('/intro')
  }

  return (
    <div className="landing-background">
        <div className="landing-circle" />
        <div className="landing-title">임소희 @lsh_0623</div>

        <div>
            <Button variant="light" onClick={() => handleNext()}>시작하기</Button>
        </div>
        
    </div>
  );
}

export default LandingPage;
