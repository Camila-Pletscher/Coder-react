import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import FinCompra from './components/FinCompra';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Welcome from './components/Welcome';
import WithNav from './components/WithNav';
import WithOutNav from './components/WithOutNav';
import { CartProvider } from './context/CartContext';


function App() {
  return (
    
    <CartProvider>
      <BrowserRouter>
      
      
      <Routes>
      <Route element={<WithOutNav/>}>
        <Route path="/" element={<Welcome/>}/>
      </Route>

      <Route element={<WithNav/>}>
        <Route path="/services" element={<ItemListContainer greeting={'HOME'}/>}/>
        <Route path="/categoria/:idcategoria" element={<ItemListContainer greeting={'HOME'}/>}/>
        <Route path="/item/:iditem" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/finalizar" element={<FinCompra />}/>
      </Route>
        
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </CartProvider>
    
    

  );
}

export default App;
