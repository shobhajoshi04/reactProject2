import React from 'react'
import "../styles/Heading.css"

function Heading({text}) {
  return (
    <div className='Heading'>
        <div></div>
        <p>{` ~ ${text } ~`}</p>
        <div></div>
    </div>
  )
}

export default Heading