import React, { useEffect } from 'react';
import { ItemList } from '../ItemList';

const ItemListContainer = ({ productos }) => {
    return (
        <>
            {
                productos.length === 0 ?
                    <p>Cargando...</p>
                    :
                    <ItemList productos={productos} />
            }
        </>
    );
};

export default ItemListContainer;