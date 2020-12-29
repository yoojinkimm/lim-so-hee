import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './taxi-pop.css';


import IconRed from '../../data/icons/btn_red.svg';
import IconYellow from '../../data/icons/btn_yellow.svg';
import IconGreen from '../../data/icons/btn_green.svg';

import { Button, Row, Col } from 'react-bootstrap';


const answers = [
    {
        name : '할머니집',
        address: '목포시 외이도'
    },
    {
        name : '할머니집',
        address: '목포시 외이도'
    },
    {
        name : '할머니집',
        address: '목포시 외이도'
    },
]



const TaxiPopup = ({show, setShow}) => {

    var max = 200;
    var min = 100;
    var num = Math.random() * (max - min) + min ;


    var z = 3;


    return(
    <>
    {show &&
        <div className='taxi-popup'
        onClick={() => z = z+1}
        style={{top: 30, left: 150 + num, zIndex: z}}>
            <div className="header-back">
                <div className="window-btn-container">
                    <img className="window-btn click" src={IconRed} onClick={() => setShow(false)} />
                    <img className="window-btn click" src={IconYellow} onClick={() => setShow(false)} />
                    <img className="window-btn click" src={IconGreen} />
                </div>
                <div className='taxi-title-text'>카카오택시 출발하기</div>
            </div>
            <div className="taxi-back">
                
            </div>
        </div>
    }
    </>
    )
}

export default TaxiPopup;