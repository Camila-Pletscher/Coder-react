import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Containter from './components/Container/Container';
import NotFound from './Pages/NotFound';
import Detail from './components/Detail/Detail';

function App() {
  return (
    <div>
      <NavBar/>
      {/* Siempre tenemos que llamar a routes desde react y dentro de ese colocar nuestras rutas con la etiqueta route */}
      <Routes>
        <Route exact path="/" element={<Containter />}></Route>
        {/* Aca le decimos que cuando este en la ruta home muestre el componente home que va dentro de element. Y donde dice cuando esta en home? en el lugar donde este el link con un <Link to> */}
        <Route exact path="/home" element={<Home></Home>}></Route>
        <Route exact path="/products" element={<Products></Products>}></Route>
        <Route exact path="/personajes/:characterId" element={<Detail />}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
