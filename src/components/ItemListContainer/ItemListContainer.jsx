import React, { useEffect } from 'react';
import { ItemList } from '../ItemList';

const ItemListContainer = ({ productos }) => {
    return (
        <>
            {
                productos.length === 0 ?
                    <p>Cargando...</p>
                    :
                    <div className="container mx-auto p-4" >
                        <ItemList productos={productos} />
                    </div>
            }
        </>
    );
};

export default ItemListContainer;