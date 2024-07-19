import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import fetchData from './fetchData';

function App() {


const [productos, setProducts] = useState([]);  

useEffect(() => {
  fetchData()
      .then(response => {
        setProducts(response);
      })
      .catch(err => console.error(err));
      
},[])

  return (
    <>
      <NavBar />
      <ItemListContainer productos={productos} />
    </>
  )
};

export default App;
