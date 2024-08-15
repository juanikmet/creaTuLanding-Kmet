import { useState } from 'react';
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { BoltIcon } from '@heroicons/react/24/solid';
import CartModal from '../Cart/CartModal';

const NavBar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <nav className="bg-blue-800 w-full shadow-md flex">
            <div className="md:px-10 py-3 flex w-full justify-between">
                <div className="flex items-center">
                    <BoltIcon className="w-8 h-8 text-white" />
                    <Link to='/'>
                        <h3 className="text-white text-lg font-bold px-2">Proyecto React</h3>
                    </Link>
                </div>
                <ul className="flex items-center cursor-pointer text-lg text-white">
                    <li className="px-5">
                        <Link to='/category/Aguas'>
                            <p>Aguas</p>
                        </Link>
                    </li>
                    <li className="px-5">
                        <Link to='/category/Gaseosas'>
                            <p>Gaseosas</p>
                        </Link>
                    </li>
                    <li className="px-5">
                        <Link to='/category/Alcoholicas'>
                            <p>Bebidas Alcohólicas</p>
                        </Link>
                    </li>
                    <li className="px-5">
                        <CartWidget onOpen={handleModalOpen} />
                    </li>
                </ul>
            </div>
            <CartModal 
                isOpen={isModalOpen} 
                onClose={handleModalClose} 
            />
        </nav>
    );
};

export default NavBar;
