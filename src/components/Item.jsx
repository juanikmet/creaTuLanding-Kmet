import React from 'react'

export const Item = ({name, price, index, image}) => {
  return (
    <div key={index} className="bg-white rounded-lg shadow-lg p-4">
        <img src={image} alt="Imagen"/>
        <h3 className="text-lg font-bold mb-2" >{name}</h3>
        <p className="text-gray-700 mb-4" >${price}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Agregar al carrito</button>
    </div>
  );
};
