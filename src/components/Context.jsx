import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const productsCollection = collection(db, "products");
const ordersCollection = collection(db, "orders");

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const ContextProvider = (props) => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    function loadData() {
        
        getDocs(productsCollection).then(snapshot => {
            let arrayOfProducts = snapshot.docs.map(element => ({
                id: element.id,
                ...element.data(),
            }));
            setProducts(arrayOfProducts);
            localStorage.setItem('products', JSON.stringify(arrayOfProducts));
        }).catch(error => {
            console.error("Error al traer productos: ", error);
        });
    }

    function createOrder(name, email) {
        return new Promise((resolve, reject) => {
          if (cart.length > 0) {
            const newOrder = {
              name,
              email,
              products: cart,
            };
            addDoc(ordersCollection, newOrder).then(response => {
              setCart([]);
              resolve(response.id); // Retorna el ID de la orden
            }).catch(error => {
              console.error("Error al guardar orden: ", error);
              reject(error);
            });
          } else {
            reject(new Error("El carrito está vacío."));
          }
        });
      }

    function removeFromCart(id) {
        const auxiliarCart = [...cart];
        const productIndex = auxiliarCart.findIndex(item => item.id === id);

        if (productIndex !== -1) {
            const product = auxiliarCart[productIndex];

            if (product.quantity > 1) {
                auxiliarCart[productIndex] = { ...product, quantity: product.quantity - 1 };
            } else {
                auxiliarCart.splice(productIndex, 1);
            }
            setCart(auxiliarCart);
        }
    }
    
    function updateProductQuantity(id, quantity) {
        const updatedCart = cart.map(product => 
            product.id === id ? { ...product, quantity } : product
        );
        setCart(updatedCart);
    }
    
    function clearCart() {
        setCart([]);
    }
    

    function addToCart(id){
        const auxiliarCart = [...cart];
    
        const productToAdd = products.find(element => element.id === id);
    
        auxiliarCart.push(productToAdd);
        setCart(auxiliarCart);
      }

       // Ejecuta loadData solo una vez cuando se monta el componente
    useEffect(() => {
        loadData();
    }, []); // El array vacío asegura que se ejecute solo en el montaje

    return(
        <AppContext.Provider value={{products, cart, setCart, addToCart, loadData, createOrder, removeFromCart, updateProductQuantity, clearCart}}>
            {props.children}
        </AppContext.Provider>
    )
}