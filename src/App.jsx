import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import fetchData from './fetchData';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorNotFound } from './components/404NotFound/ErrorNotFound';
import { ItemDetail } from './components/Items/ItemDetail';

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
      <BrowserRouter basename='/'>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer productos={productos} />}/>
          <Route path='category/:categoryId' element={<ItemListContainer />} />
          <Route path='*' element={<ErrorNotFound />} />
          <Route path='/detalle/:id' element={<ItemDetail productos={productos} />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
