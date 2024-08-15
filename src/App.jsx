import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorNotFound } from './components/404NotFound/ErrorNotFound';
import { ItemDetail } from './components/ItemDetailContainer/ItemDetail';
import CategoryProducts from './components/CategoryContainer/CategoryProducts';
import { ContextProvider } from './components/Context';


function App() {

  return (
    <ContextProvider>
      <BrowserRouter basename='/'>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path="/category/:categoryId" element={<CategoryProducts />} />
            <Route path='*' element={<ErrorNotFound />} />
            <Route path='/detalle/:id' element={<ItemDetail />}/>
          </Routes>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App;
