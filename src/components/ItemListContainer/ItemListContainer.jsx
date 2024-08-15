import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { useAppContext } from '../Context';
import { useEffect } from 'react';

const ItemListContainer = () => {

    const {loadData, cart, products} = useAppContext();

    useEffect(() => {
        loadData();
    }, []); 

    return (
        <>
            {
                products.length === 0 ?
                    <Loader />
                    :
                    <div className="container mx-auto p-4" >
                        <ItemList products={products} />
                    </div>
            }
        </>
    );
};

export default ItemListContainer;