import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './password.css';



const PasswordInput = 
({
    value,
    onChange,
    hint,
    answer,
    setShow
}) => {
    const [error, setError] = useState(false);

    const validatePW = (e) => {
      if (e.key === "Enter") {
          if (value === answer) {
              setShow(true);
          }
          else setError(true);
      } 
  }

  useEffect(() => {
      return () => {
          setError(false)
      }
  }, [])

  useEffect(() => {
      setError(false)
  }, [value])


    return(
        <div className="password-back">
            <div className="password-text">비밀번호</div>
            <div className="password-hint">힌트: {hint}</div>
            <input className="password-input" 
            value={value} 
            onChange={onChange}
            placeholder={"Enter를 입력하세요."}
            onKeyPress={validatePW} />
            {error &&
            <div className='password-error'>비밀번호가 틀렸습니다.</div>
            }
        </div>
    )
}

export default PasswordInput;