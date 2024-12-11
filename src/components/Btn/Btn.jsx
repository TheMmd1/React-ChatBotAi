import React from 'react';
import "./Btn.css"

const Btn = (props) => {
  return (
    <div>
      <button  className={props.ClassCss}>{props.val}</button>
    </div>
  )
}

export default Btn ;
