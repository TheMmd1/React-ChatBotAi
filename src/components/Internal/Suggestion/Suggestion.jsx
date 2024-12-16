import React from 'react';
import "./Suggestion.css";
import icon from "../../../assets/Icon (6).png";

const Suggestion = (props) => {
  return (
    <div className='suggestion'>
        <h3>{props?.heading}</h3>
        <p>{props?.description}</p>
        <img src={icon} alt="icon" />
    </div>
  )
}

export default Suggestion
