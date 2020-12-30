
import React, { useContext, useEffect, useState } from 'react';
import '../../App.css';
import { useHistory } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';

import './mobile.css';

import InstaIcon from '../../data/icons/Instagram_icon.png';


const MobilePage = () => {

    const goInstagram = () => {
      window.open(`https://www.instagram.com/lsh_623/`)
  }

  return (
    <div className="mobile-background">
        <div className="mobile-title">임소희 <br /> @lsh_623</div>
        <div className="mobile-text">저희 작품은 노트북 화면을 배경으로 한 <br /> 웹 추리 게임입니다. <br /> PC 화면에서의 이용을 권장하고 있습니다. <br /> 작품에 관심을 기울여주셔서 감사합니다.</div>
        <div className="click icon" onClick={() => goInstagram()}>
            <img className="icon-img" src={InstaIcon} />
            <div className="icon-txt">소희의 계정</div>
        </div>
    </div>
  );
}

export default MobilePage;
