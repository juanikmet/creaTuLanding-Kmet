import React from 'react';
import { Item } from './Item';

export const ItemList = ({productos}) => {
  return (
    <div className='flex flex-wrap -mx-2'>
        {
            productos.map((element, index) => {
                return(
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
                  <Item index={index} name={element.name} price={element.price} image={element.image} />
                </div>
                )
            })
        }
    </div>
  )
}
