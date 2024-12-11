import React from 'react'
import "./Topic.css"

const Topic = (props) => {
  return (
    <div className='topic'>
        <h4>{props?.heading}</h4>
        <p>{props?.content}</p>
        <span>{props?.date}</span>
    </div>
  )
}

export default Topic
