import React from 'react';
import { ItemCount } from './ItemCount.jsx';
import { Link } from 'react-router-dom';
import { useAppContext } from '../Context';

export const Item = ({ id, name, price, image, stock }) => {
  const { addToCart } = useAppContext();

  const imagePath = `/assets/product-img/${image}`;

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <img src={imagePath} alt={`Imagen de ${name}`} className="w-full h-auto object-cover mb-4" />
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <p className="text-gray-700 mb-4">${price}</p>
      <ItemCount
        name={name}
        id={id}
        initial={0}
        stock={stock}
        addToCart={addToCart}
        onAdd={(quantity) => console.log('Cantidad agregada:', quantity)}
      />
      <Link to={`/detalle/${id}`}>
        <button className="border-gray-200 hover:bg-gray-400 text-gray px-4 py-2 rounded w-full mt-2 border-2">
          Ver producto
        </button>
      </Link>
    </div>
  );
};
