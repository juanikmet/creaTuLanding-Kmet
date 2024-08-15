import React, { useState } from 'react';
import { useAppContext } from '../Context';
import CartCheckout from './CartCheckout';

const CartModal = ({ isOpen, onClose }) => {
  const { cart, addToCart, removeFromCart, clearCart, products } = useAppContext();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  if (!isOpen) return null;

  const groupedItems = cart.reduce((acc, item) => {
    if (acc[item.id]) {
      acc[item.id].quantity += 1;
    } else {
      acc[item.id] = { ...item, quantity: 1 };
    }
    return acc;
  }, {});

  const items = Object.values(groupedItems);

  const getProductDetails = (productId) => {
    return products.find(product => product.id === productId);
  };

  const handleClearance = () => {
    clearCart();
    onClose();
  };

  const isCartEmpty = cart.length === 0;

  return (
    <>
      {checkoutOpen ? (
        <CartCheckout onClose={() => {
          setCheckoutOpen(false);
          onClose(); // Cierra también el CartModal
        }} />
      ) : (
        <div className="fixed inset-0 flex items-center justify-end z-50 bg-gray-900 bg-opacity-50">
          <div className="w-[80vw] sm:w-[45vw] h-[95vh] bg-white shadow-lg rounded-l-lg p-6 relative flex flex-col">
            <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">&times;</button>
            
            <h2 className="text-xl font-bold mb-4">Carrito de Compras</h2>
            <p className="text-gray-700 mb-4">Revisa los productos antes de proceder al pago.</p>
            
            {items.length === 0 ? (
              <p className="text-gray-500">Tu carrito está vacío.</p>
            ) : (
              <ul className="divide-y divide-gray-200 flex-1 overflow-y-auto mb-4">
                {items.map((item) => {
                  const productDetails = getProductDetails(item.id);

                  // Construir la URL correcta para la imagen
                  const imagePath = `/assets/product-img/${productDetails?.image}`;

                  return (
                    <li key={item.id} className="py-2 flex items-center">
                      <img src={imagePath} alt={`Imagen de ${productDetails?.name}`} className="w-16 h-16 object-cover mr-4" />
                      <div className="flex-1">
                        <p className="font-medium">{productDetails?.name}</p>
                        <p className="text-gray-500">Cantidad: {item.quantity}</p>
                        <p className="text-gray-500">Precio: ${productDetails?.price * item.quantity}</p>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        <button 
                          onClick={() => addToCart(item.id)} 
                          className="bg-blue-500 text-white rounded px-2 py-1">+</button>
                        <button 
                          onClick={() => removeFromCart(item.id)} 
                          className="bg-red-500 text-white rounded px-2 py-1">-</button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
            
            <div className="flex gap-2">
              <button 
                onClick={() => setCheckoutOpen(true)} 
                className={`w-full py-2 rounded-lg mb-2 ${isCartEmpty ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-blue-700 text-white'}`}
                disabled={isCartEmpty}>
                Comprar
              </button>
              
              <button 
                onClick={handleClearance} 
                className={`w-full py-2 rounded-lg mb-2 ${isCartEmpty ? 'border-gray-300 text-gray-600 bg-gray-200 cursor-not-allowed' : 'border-blue-500 border-2 text-blue-500 bg-white'}`}
                disabled={isCartEmpty}>
                Borrar Carrito
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartModal;
