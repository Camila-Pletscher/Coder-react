import './ItemListContainer.css';
import logo from '../assets/images/logo-pyc.png'

import 'materialize-css/dist/css/materialize.min.css';
// import ItemCount from './ItemCount';
import ItemList from './ItemList';
import ItemDetailContainer from './ItemDetailContainer';
import { useEffect, useState } from 'react';



function ItemListContainer() {

    const [info, setInfo] = useState([]);

    useEffect(() => {
        setTimeout(
            fetch ('data.json')
            .then ((resp) => resp.json())
            .then ((data) => setInfo (data))
            ,2000)
    })

    

    return (
        <div className='cont-img container-fluid center'>
                
                <ItemList services={info}/>
                <ItemDetailContainer services={info}/>
            
            {/* <ItemCount stock={10} /> */}
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