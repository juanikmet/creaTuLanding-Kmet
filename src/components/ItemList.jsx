import React from 'react';
import { Item } from './Item';

export const ItemList = ({productos}) => {
  return (
    <div>
        {
            productos.map((element, index) => {
                return(
                <Item index={index} name={element.name} price={element.price} />
                )
            })
        }
    </div>
  )
}
