import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import { CartProvider } from './context/CartContext';


function App() {
  return (
    
    <CartProvider>
      <BrowserRouter>
      
      <NavBar></NavBar>
      <Routes>
        
      <Route path="/" element={<Welcome/>}/>
        <Route path="/home" element={<ItemListContainer greeting={'HOME'}/>}/>
        <Route path="/categoria/:idcategoria" element={<ItemListContainer greeting={'HOME'}/>}/>
        <Route path="/item/:iditem" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />}/>
        
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </CartProvider>
    
    

  );
}

export default App;
