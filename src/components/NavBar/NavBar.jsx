import { Link } from "react-router-dom";
import CartWdiget from "../CartWidget/CartWidget";
import { BeakerIcon, BoltIcon } from '@heroicons/react/24/solid';

const NavBar = () => {
    return(
        <nav className="bg-blue-800 w-full shadow-md flex">
            <div className="md:px-10 py-3 flex">
            <BoltIcon className="w-8 h-8 text-white" />
            <Link to='/'>
                <h3 className="text-white text-lg font-bold px-2">Proyecto React</h3>
            </Link>
            <ul className="flex px-5 items-center cursor-pointer text-lg text-white">
                <li className="px-5">
                    <Link to='/aguas'>
                        <p>Aguas</p>
                    </Link>
                </li>
                <li className="px-5">
                    <Link to='/gaseosas'>
                        <p>Gaseosas</p>
                    </Link>
                </li>
                <li className="px-5">
                    <Link to='/bebidasalcoholicas'>
                        <p>Bebidas Alcoholicas</p>
                    </Link>
                </li>
            </ul>
            </div>
            <div className="align-middle">
                <CartWdiget />
            </div>
        </nav>
    );
};

export default NavBar;