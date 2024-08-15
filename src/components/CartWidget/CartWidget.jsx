import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useAppContext } from '../Context';
import Swal from 'sweetalert2';

const CartWidget = ({ onOpen }) => {
    const { cart } = useAppContext();

    function handlerOpen() {
        if (cart.length !== 0) {
            onOpen();
        } else {
            Swal.fire("El carrito está vacío.");
        }
    }

    return (
        <div className="text-white text-center flex align-middle">
            <div className="basis-1/2" onClick={handlerOpen}>
                <ShoppingBagIcon className="text-center w-8 px-1 py-1 align-middle" />
            </div>
            <span className="basis-1/2 text-center bg-slate-300 text-slate-800 py-1 px-8 rounded-md">
                {cart.length}
            </span>
        </div>
    );
};

export default CartWidget;