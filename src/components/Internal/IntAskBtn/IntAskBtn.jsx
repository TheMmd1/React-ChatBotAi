import React from 'react';
import "./IntAskBtn.css";
import Input from '../../Input/Input';
import sendIcon from "../../../assets/Send 2.png";
import Btn from '../../Btn/Btn';

const sendImg = <img src={sendIcon}/>; 

const IntAskBtn = () => {
  return (
    <div className='sendMessageDiv'>
      <Input type ="text" placeholder = "Ask me anything..."/>
      <Btn val={sendImg}  ClassCss = "btn-g"/>
    </div>
  )
}

export default IntAskBtn
