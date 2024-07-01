import CartWdiget from "../CartWidget/CartWidget";
import { BeakerIcon, BoltIcon } from '@heroicons/react/24/solid';

const NavBar = () => {
    return(
        <nav className="bg-blue-800 w-full shadow-md flex">
            <div className="md:px-10 py-3 flex">
            <BoltIcon className="w-8 h-8 text-white" />
            <h3 className="text-white text-lg font-bold px-2">Proyecto React</h3>
            <ul className="flex px-5 items-center cursor-pointer text-lg text-white">
                <li className="px-5"><a href="#">Home</a></li>
                <li className="px-5"><a href="#">Productos</a></li>
                <li className="px-5"><a href="#">Contacto</a></li>
            </ul>
            </div>
            <div className="align-middle">
                <CartWdiget />
            </div>
        </nav>
    );
};

export default NavBar;