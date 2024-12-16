import React from 'react';
import "./IntFull.css";
import ProfilPic from '../../profilePic/ProfilPic';
import Edit from "../../../assets/Icon (7).png";
import Copy from "../../../assets/Icon (8).png";
import Logo from "../../../assets/images 1.png";
import Share from "../../../assets/Icon (9).png";
import Regenerate from "../../../assets/Icon (10).png";

const IntFull = (props) => {
  return (
    <div>


      <div className="userMessage">
        <div className='userMessHead'>
            <ProfilPic />
            <h4>You</h4>
        </div>
        <p className='userText'>{props?.userText}</p>
        <div className='userTools'>
            <img src={Edit} alt="edit icon" />
            <p>Edit</p>
            <img src={Copy} alt="copy icon" />
            <p>Copy</p>
        </div>
      </div>


      <div className="aiRespond">
      <div className='aiMessHead'>
            <img src={Logo} alt="ai icon" />
            <h4>Chat Bot AI</h4>
        </div>
        <p className='aiText'>{props?.aiText}</p>
        <div className='userTools'>
            <img src={Copy} alt="copy icon" />
            <p>Copy</p>
            <img src={Share} alt="share icon" />
            <p>Share</p>
            <img src={Regenerate} alt="regenerate icon" />
            <p>Regenerate</p>
        </div>
      </div>
    </div>
  )
}

export default IntFull
