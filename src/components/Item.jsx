import React from 'react'

export const Item = ({name, price, index}) => {
  return (
    <div key={index} className='productCard'>
        <h3>{name}</h3>
        <p>${price}</p>
        <button>Agregar al carrito</button>
    </div>
  );
};
