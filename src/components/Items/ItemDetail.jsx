import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const ItemDetail = ( {productos} ) => {

    const {id} = useParams();

    const [selectedProduct, setSelectedProduct] = useState({});

    useEffect(() => {
        const findProduct = productos.find(element => element.id === parseInt(id));
        setSelectedProduct(findProduct);
    },[]);

    const imagePath = `../../${selectedProduct.image}`;

  return (
    <article>
        <header>
            <h2>{selectedProduct.name}</h2>
        </header>
        <picture>
            <img src={imagePath} alt={selectedProduct.name}/>
        </picture>
        <section>
            <p>Precio: ${selectedProduct.price}</p>
            <p>Categoria: {selectedProduct.category}</p>
            <p>Descripcion: {selectedProduct.description}</p>
        </section>
        <footer>
            
        </footer>

    </article>

  )
}
