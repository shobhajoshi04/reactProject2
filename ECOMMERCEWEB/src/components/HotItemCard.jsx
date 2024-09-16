import React from 'react';
import "../styles/HotItemCard.css"

function HotItemCard({ image, price, name, index }) {
  return (
    <div key={index} className='HotItemCard'>
        <img src={image} alt={`${index} product`} />
        <p>{name}</p>
        <span>{price}</span>
    </div>
  );
}

export default HotItemCard;