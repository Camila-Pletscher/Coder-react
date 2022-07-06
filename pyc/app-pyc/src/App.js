import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import { Route, Routes } from 'react-router-dom';
import Proyects from './Pages/Proyects/Proyects';
import ItemDetail from './components/Detail/Detail';
import Welcome from './Pages/Welcome/Welcome';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Welcome></Welcome>}></Route>
        <Route exact path="/home" element={<Home></Home>}></Route>
        <Route exact path="/prueba" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
        <Route exact path="/services" element={<Services></Services>}></Route>
        <Route exact path="/services/:catId" element={<ItemListContainer></ItemListContainer>}></Route>
        <Route exact path="/service/:detId" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
        <Route exact path="/proyects" element={<Proyects></Proyects>}></Route>
      </Routes>
    </div>
  );
}

export default App;
