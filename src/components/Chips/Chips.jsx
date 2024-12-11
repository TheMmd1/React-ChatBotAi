import React from 'react'
import "./Chips.css"

const Chips = (props) => {
  return (
    <div className= {props?.ClassCss}>
      <img src={props?.icon} alt="" />
      <h1>{props?.text}</h1>
    </div>
  )
}

export default Chips;
