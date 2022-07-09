import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';


function App() {
  return (
    
    <BrowserRouter>
    <NavBar></NavBar>

    <Routes>
      <Route path="/" element={<ItemListContainer greeting={'HOME'}/>}/>
      <Route path="/home" element={<ItemListContainer greeting={'HOME'}/>}/>
      <Route path="/categoria/:idcategoria" element={<ItemListContainer greeting={'HOME'}/>}/>
      <Route path="/item/:iditem" element={<ItemDetailContainer />} />
      
    </Routes>
    </BrowserRouter>
    
    

  );
}

export default App;
