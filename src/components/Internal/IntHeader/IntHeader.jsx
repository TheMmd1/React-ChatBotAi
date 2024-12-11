import React from 'react';
import "./IntHeader.css";
import hamburgurMenu from "../../../assets/Icon Left.png";
import logo  from "../../../assets/images 1.png";
import Export from "../../../assets/Icon Right.png";

const IntHeader = () => {
  return (
    <div className='intHeader'>
      <div className="nav">
        <img src={hamburgurMenu} alt="menu" className='menuIcon'/>
        <img src={logo} alt="" className='logo'/>
        <h4>GPT 40</h4>
      </div>
      <div className="export">
        <img src={Export} alt="" />
      </div>
    </div>
  )
}

export default IntHeader;
