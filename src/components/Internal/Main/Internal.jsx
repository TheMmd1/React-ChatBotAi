import React, { useState } from 'react';
import "./Internal.css"
import IntHeader from '../IntHeader/IntHeader';
import IntAskBtn from '../IntAskBtn/IntAskBtn';
import IntEmpty from '../IntEmpty/IntEmpty';
import IntFull from '../IntFull/IntFull';

// const [empty , setEmpty] = useState(true);
const Internal = () => {

  const aiText = "I will try to create the image. Please be patient...";
  const userText = "Tell me the story of a student who was going to school and some interesting things happened to her on the way.";

  return (
    <div  className='internalMainCont'>
      <IntHeader />
      <div className="internalContent">
        {/* {empty ? <IntEmpty /> : <IntFull /> } */}
        {/* <IntEmpty /> */}
        <IntFull userText = {userText}  aiText = {aiText}/>
      </div>
      
       <IntAskBtn />
    </div>
  )
}

export default Internal;
