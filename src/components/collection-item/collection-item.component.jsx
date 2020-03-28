import React from 'react';
import './collection-item.styles.scss';

const CollectionItem = ({ name, price, imageUrl }) => (
  <div className='collection-item'>
    <div 
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    >
      <button>{ 'Buy Now'.toUpperCase() }</button>
    </div>
    <div className='collection-footer'>
      <h2>{name}</h2>
      <span>{price}</span>
    </div>
  </div>
)

export default CollectionItem;