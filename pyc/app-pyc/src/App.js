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


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Welcome></Welcome>}></Route>
        <Route exact path="/home" element={<Home></Home>}></Route>
        <Route exact path="/services" element={<Services></Services>}></Route>
        
        <Route exact path="/services/:detId" element={<ItemDetail></ItemDetail>}></Route>
        <Route exact path="/proyects" element={<Proyects></Proyects>}></Route>
      </Routes>
    </div>
  );
}

export default App;
