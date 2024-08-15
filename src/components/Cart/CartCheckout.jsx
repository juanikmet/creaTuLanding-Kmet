import React, { useState } from 'react';
import { useAppContext } from '../Context';
import Swal from 'sweetalert2';

const CartCheckout = ({ onClose }) => {
  const { cart, createOrder } = useAppContext();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [orderId, setOrderId] = useState(null);

  const groupedItems = cart.reduce((acc, item) => {
    if (acc[item.id]) {
      acc[item.id].quantity += 1;
    } else {
      acc[item.id] = { ...item, quantity: 1 };
    }
    return acc;
  }, {});

  const items = Object.values(groupedItems);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const id = await createOrder(name, email);
      setOrderId(id);
      onClose(); // Cierra el CartCheckout
      setTimeout(() => {
        Swal.fire(`Compra realizada con orden: ${id}`);
      }, 300); // Agrega un pequeño retraso para asegurar que el modal se cierre antes del alert
    } catch (error) {
      console.error("Error al realizar la compra: ", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
      <div className="w-[80vw] sm:w-[45vw] bg-white shadow-lg rounded-lg p-6 relative flex flex-col">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">&times;</button>
        
        <h2 className="text-xl font-bold mb-4">Finaliza tu Compra</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Nombre:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Resumen de Compra:</h3>
            <ul className="divide-y divide-gray-200">
              {items.map((item) => (
                <li key={item.id} className="py-2 flex items-center">
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-gray-500">Cantidad: {item.quantity}</p>
                    <p className="text-gray-500">Precio: ${item.price * item.quantity}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-700 text-white rounded-lg"
          >
            Confirmar Compra
          </button>
        </form>
      </div>
    </div>
  );
};

export default CartCheckout;
