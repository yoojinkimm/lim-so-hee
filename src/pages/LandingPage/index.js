
import React, {useState} from 'react';
import '../../App.css';
import { useHistory } from 'react-router-dom';

import './landing.css';
import { Button } from 'react-bootstrap';

import { useSpring, animated } from 'react-spring'


const LandingPage = () => {
  const history = useHistory();
  const [showBtn, setShowBtn] = useState(false)
  const props = useSpring({
    from: { width: '0%', background: 'white' },
    to: { width: '100%', background: 'white' },
    onRest: () => setShowBtn(true),
    delay: 100,
  })
  const handleNext = () => {
      history.push('/intro')
  }

  return (
    <div className="landing-background">
        <div className="landing-circle" />
        <div className="landing-title">임소희 @lsh_0623</div>
        
        <div className="loading-container">
          <animated.div className="loading-box" style={props} />
        </div>

        <div style={{height: 38}}>
        {showBtn &&
            <Button variant="light" onClick={() => handleNext()}>시작하기</Button>
        }
        </div>
    </div>
  );
}

export default LandingPage;
