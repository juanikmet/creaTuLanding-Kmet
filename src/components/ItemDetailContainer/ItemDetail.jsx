import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppContext } from '../Context';
import { ItemCount } from '../Items/ItemCount'; // Asegúrate de importar ItemCount

export const ItemDetail = () => {
    const { products } = useAppContext();
    const { id } = useParams();
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        if (products.length > 0) { 
            const findProduct = products.find(element => element.id === id);
            setSelectedProduct(findProduct);
        }
    }, [products, id]);

    if (!selectedProduct) { 
        return <div>Loading...</div>;
    }

    const imagePath = `/assets/product-img/${selectedProduct.image}`;

    return (
        <article className="container mx-auto p-6">
            <header className="mb-4">
                <Link to="/" className="text-blue-500 underline">Regresar</Link>
            </header>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                    <picture>
                        <img src={imagePath} alt={selectedProduct.name} className="w-full h-auto object-cover rounded-lg shadow-lg" />
                    </picture>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-between">
                    <section className="mb-6">
                        <h2 className="text-2xl font-bold mb-2">{selectedProduct.name}</h2>
                        <p className="text-lg text-gray-700 mb-2">Precio: ${selectedProduct.price}</p>
                        <p className="text-lg text-gray-700 mb-2">Categoría: {selectedProduct.category}</p>
                        <p className="text-lg text-gray-700">Descripción: {selectedProduct.description}</p>
                    </section>
                    <footer>
                        <ItemCount
                            id={selectedProduct.id}
                            stock={selectedProduct.stock}
                            initial={1}
                            addToCart={(id) => console.log('Agregar al carrito', id)} // Actualiza según tu lógica
                            onAdd={(quantity) => console.log('Cantidad agregada:', quantity)} // Actualiza según tu lógica
                        />
                    </footer>
                </div>
            </div>
        </article>
    );
}
