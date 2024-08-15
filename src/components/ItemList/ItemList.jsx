import React from 'react';
import { Item } from '../Items/Item';

export const ItemList = React.memo(({ products }) => {
  return (
    <div className='flex flex-wrap -mx-2'>
        {products.map((element) => (
            <div key={element.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
              <Item 
                name={element.name} 
                price={element.price} 
                image={element.image} 
                stock={element.stock} 
                id={element.id} 
              />
            </div>
        ))}
    </div>
  );
});
