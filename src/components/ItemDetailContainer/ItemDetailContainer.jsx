import React from 'react';
import { useEffect, useState } from 'react';
import getProductById from '../../fetchData';
import { ItemDetail } from './ItemDetail';
import { useAppContext } from '../Context';
import { ContextProvider } from './components/Context';


export const ItemDetailContainer = () => {
    const { id } = useParams(); // Obtener el ID del producto desde la URL
    const {products} = useAppContext();
    const [product, setProduct] = useState(null);


    useEffect(() => {
        // Verificar si el ID está disponible y cargar el producto
        if (id) {
            getProductById(id)
                .then(response => {
                    setProduct(response);
                })
                .catch(error => {
                    console.error("Error al obtener el producto:", error);
                });
        }
    }, [id]); // Ejecutar cada vez que el ID cambie

    // Verificar si el producto está disponible antes de renderizar
    if (!product) {
        return <div>Loading...</div>;
    }

  return (
    <div>
        <ItemDetail 
        name={products.name} 
        price={products.price}
        image={product.image}
        stock={product.stock}
         />
    </div>
  )
}
