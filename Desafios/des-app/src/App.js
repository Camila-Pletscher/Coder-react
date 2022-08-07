import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import WithNav from './components/NavBar/WithNav';
import WithOutNav from './components/NavBar/WithOutNav';
import Welcome from './components/Welcome/Welcome';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import FinCompra from './components/Cart/FinCompra';

import { CartProvider } from './context/CartContext';
import Consultas from './components/Consultas/Consultas';


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
        <Route path="/consultas" element={<Consultas/>}/>
      </Route>
        
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </CartProvider>
    
    

  );
}

export default App;
