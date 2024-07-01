import cart from './assets/cart.svg';
import { ShoppingBagIcon} from '@heroicons/react/24/outline';

const CartWdiget = () => {

    return(
        <div className="text-white text-center flex align-middle" >
            <div className="basis-1/2">
            <ShoppingBagIcon className="text-center w-8 px-1 py-1 align-middle"/>
            </div>
            <span className="basis-1/2 text-center bg-slate-300 text-slate-800 py-1 px-8 rounded-md">0</span>
        </div>
    );

};

export default CartWdiget;