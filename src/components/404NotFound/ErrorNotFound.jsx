import React from 'react';
import image404 from './errors/404.png';
import { Link } from "react-router-dom";

export const ErrorNotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen' >
        <h1 className='hidden' >La pagina que buscas no se encontro.</h1>
        <img src={image404} className='w-100'/>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 mt-4">
          <Link to="/" className="flex justify-center items-center w-full h-full">
            Ir a la home
          </Link>
        </button>
    </div>
  )
};
