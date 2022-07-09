import './ItemListContainer.css';
import logo from '../logo-pyc.png'

import 'materialize-css/dist/css/materialize.min.css';
// import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



function ItemListContainer() {

    const [items, setItems] = useState([]);

    const {idcategoria}=useParams();

    useEffect(() => {
        setTimeout(() => {
            fetch ('../data/data.json')
            .then ((resp) => resp.json())
            .then((data) => {setItems(idcategoria ? data.filter((items) => items.categoria === idcategoria) : data)})
        },2000)
    }, [idcategoria])
    console.log(items)
    

    return (
        <div className='cont-img container-fluid center'>
                
                <ItemList items={items}/>
                
            
            
         <div className='row'>
            <div className='col-4 center saludo'>
                <img src={logo} alt='' />
                <p>Servicios</p>
                <p>Delegá para crecer</p>
            </div>
         </div>
         <div className='row'>
            <div className='col-4 center'>
                
                    <button>Packs</button>
                
            </div>            
         </div>
         <div className='row'>
            <div className='col-4 center'>
                
                    <button>Identidad Visual</button>
                
            </div>            
         </div>
         <div className='row'>
            <div className='col-4 center'>
                
                    <button>Packaging</button>
                
            </div>            
         </div>
         <div className='row'>
            <div className='col-4 center'>
                
                    <button>Redes</button>
                
            </div>            
         </div>
       </div>
    );
  }
  
  export default ItemListContainer;