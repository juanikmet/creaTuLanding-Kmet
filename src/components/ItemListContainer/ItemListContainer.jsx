import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

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