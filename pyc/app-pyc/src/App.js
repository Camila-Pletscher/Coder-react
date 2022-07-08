import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Container from './components/Container/Container';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import { Route, Routes } from 'react-router-dom';
import Proyects from './Pages/Proyects/Proyects';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Welcome from './Pages/Welcome/Welcome';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Container/>}></Route>
        <Route exact path="/home" element={<Container/>}></Route>
        <Route exact path="/categoria/:idcategoria" element={<Container/>}></Route>
        
        <Route exact path="/item/:iditem" element={<ItemDetailContainer/>}></Route>
        <Route exact path="/proyects" element={<Proyects></Proyects>}></Route>
      </Routes>
    </div>
  );
}

export default App;
