import React from 'react';
import { useEffect, useState } from 'react';
import getProductById from '../../fetchData';
import { ItemDetail } from './ItemDetail';



export const ItemDetailContainer = (productos) => {
    const [product, setProudct] = useState(null);

    useEffect(() => {
        getProductById('1') 
        .then(response => {
            setProudct(response);
        })
        .catch(error => {
            console.error(error);
        })
    }, [])

  return (
    <div>
        <ItemDetail name={productos.name} price={productos.price} />
    </div>
  )
}
