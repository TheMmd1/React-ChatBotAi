import React, { useState } from 'react';
import "./Internal.css"
import IntHeader from '../IntHeader/IntHeader';
import IntAskBtn from '../IntAskBtn/IntAskBtn';

// const [empty , setEmpty] = useState(true);
const Internal = () => {
  return (
    <div  className='internalMainCont'>
      <IntHeader />
      <div className="internalContent">
        {/* {empty ? <IntEmpty /> : <IntFull /> } */}
        
      </div>
      
       <IntAskBtn />
    </div>
  )
}

export default Internal;
