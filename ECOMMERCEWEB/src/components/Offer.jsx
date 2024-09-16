import React from 'react'

// object

function Offer({src , link , index}) {
  return (
    <a href={link}>
    <img src={src} alt={`${index}`} />
  </a>
  
     
  )
}

export default Offer