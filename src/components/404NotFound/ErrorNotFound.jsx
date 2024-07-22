import React from 'react';
import image404 from './errors/404.png';

export const ErrorNotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen' >
        <h1 className='text-4xl font-bold mb-4' >La pagina que buscas no se encontro.</h1>
        <img src={image404} className='w-100'/>
    </div>
  )
};
