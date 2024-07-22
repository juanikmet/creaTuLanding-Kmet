import React from 'react';
import { useState } from 'react';

export const ItemCount = ({stock, initial, onAdd}) => {

    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 0){
            setQuantity(quantity - 1)
        }
    }


  return (
    <div className="Counter">
        <div className='inline-flex w-full'>
            <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l' onClick={decrement}>-</button>
            <h6 className='bg-gray-100 text-gray-800 font-bold py-2 px-4' >{quantity}</h6>
            <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r' onClick={increment}>+</button>
        </div>
        <div className='mt-4' >
        <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded w-full" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
        </div>
    </div>
  );
};