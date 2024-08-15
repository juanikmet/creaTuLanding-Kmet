import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../Context';
import { ItemList } from '../ItemList/ItemList';
import { Loader } from '../Loader/Loader';

const CategoryProducts = () => {
    const { categoryId } = useParams();
    const { products } = useAppContext();

    const normalizedCategoryId = categoryId.toLowerCase();

    const filteredProducts = products.filter(product => product.category.toLowerCase() === normalizedCategoryId);

    return (
        <div className="container mx-auto p-4">
            {filteredProducts.length === 0 ? <Loader /> : <ItemList products={filteredProducts} />}
        </div>
    );
};

export default CategoryProducts;
