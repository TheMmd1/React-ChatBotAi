import React from 'react'
import "./IntEmpty.css"
import Suggestion from '../Suggestion/Suggestion'

const IntEmpty = () => {
  return (
    <div>
      <h3 className='intHeading'>How can I help you my friend? 😊️</h3>
      <div className="suggestionContainer">
        < Suggestion heading="Brainstorm names" description="for my fantasy football team with a frog theme" />
        < Suggestion heading="Suggest some codenames" description="for a project introducing flexible work arrangements" />
        < Suggestion heading="Write a SQL query" description="that adds a status column to an orders table" />
        < Suggestion heading="Explain why popcorn pops" description="to a kid who loves watching it in the microwave" />
      </div>
    </div>
  )
}

export default IntEmpty
